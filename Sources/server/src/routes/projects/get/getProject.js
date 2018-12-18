const router = require('express').Router();
const Rows = require('../../../database/models/rows')();
const Plugins = require('../../../database/models/plugins')();

router.get('/:id', async (req, res, next) => {
  const rows = [];
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
                textAlign: row.dataValues.textAlign === null ? '' : row.dataValues.textAlign,
                color: row.dataValues.color === null ? '' : row.dataValues.color,
                fontSize: row.dataValues.fontSize === null ? '' : row.dataValues.fontSize
              }
            }
          });
          return el;
        });
        rows.push({
          type: row.dataValues.type,
          options: {
            uid: row.dataValues.uid,
            href: '',
            alt: '',
            columns: plugin.map(el => el.dataValues.uid),
            value: row.dataValues.value,
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

  res.send({ container: { rows, columns } });
});

module.exports = {
  router
};
