const router = require('express').Router();
const _ = require('lodash');
const Rows = require('../../../database/models/rows')();
const Plugins = require('../../../database/models/plugins')();

function getColumns(plugin, nbRow) {
  if (nbRow === '') {
    // eslint-disable-next-line no-param-reassign
    nbRow = 1;
  }
  const newColumn = [...Array(parseInt(nbRow, 10))].map(() => '_');

  plugin.forEach(el => {
    newColumn[el.dataValues.order] = el.dataValues.uid;
  });
  return newColumn;
}

router.get('/:id', async (req, res, next) => {
  let rows = [];
  const columns = [];
  const { id: projectId } = req.params;

  try {
    const rowsDb = await Rows.findAll({ where: { fk_id_project: projectId } });
    const result = rowsDb.map(async row => {
      if (rows.find(el => el.options.uid === row.dataValues.options.uid) === undefined) {
        const plugin = await Plugins.findAll({ where: { fk_id_row: row.dataValues.uid } });
        plugin.map(el => {
          columns.push({
            type: el.dataValues.type,
            options: {
              uid: el.dataValues.uid,
              href: el.dataValues.href,
              alt: el.dataValues.alt,
              columns: [0],
              value: el.dataValues.value,
              src: el.dataValues.src,
              childStyle: {
                height: el.dataValues.height === null ? '' : el.dataValues.height,
                width: el.dataValues.width === null ? '' : el.dataValues.width,
                padding: el.dataValues.padding === null ? '' : el.dataValues.padding,
                textAlign: el.dataValues.textAlign === null ? '' : el.dataValues.textAlign,
                color: el.dataValues.color === null ? '' : el.dataValues.color,
                fontSize: el.dataValues.fontSize === null ? '' : el.dataValues.fontSize,
                fontWeight: el.dataValues.fontWeight === null ? '' : el.dataValues.fontWeight
              }
            }
          });
          return el;
        });
        rows.push({
          order: row.dataValues.order,
          type: row.dataValues.type,
          options: {
            uid: row.dataValues.uid,
            href: '',
            alt: '',
            columns: getColumns(plugin, row.dataValues.value),
            value: row.dataValues.value === '' ? '1' : row.dataValues.value,
            src: '',
            childStyle: {
              height: '',
              width: '',
              padding: '',
              textAlign: row.dataValues.textAlign === null ? '' : row.dataValues.textAlign,
              color: '',
              fontSize: ''
            }
          }
        });
      }
      return row;
    });
    await Promise.all(result);
  } catch (err) {
    next(err);
  }

  rows = _.sortBy(rows, ['order']);
  res.send({ container: { rows, columns } });
});

module.exports = {
  router
};
