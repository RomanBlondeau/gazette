const router = require('express').Router();
const Rows = require('../../../database/models/rows')();
const Plugins = require('../../../database/models/plugins')();

function updateOrCreate(Model, value, condition) {
  return Model.findOne({ where: condition }).then(res => {
    if (res) return res.update(value);
    return Model.create(value);
  });
}

function deleteProjectData(projectId) {
  return Rows.destroy({ where: { fk_id_project: projectId } }).then(res => res);
}

router.post('/', (req, res, next) => {
  const { container, projectId } = req.body;

  try {
    deleteProjectData(projectId);
    container.rows.forEach((row, rowOrder) => {
      updateOrCreate(
        Rows,
        {
          uid: row.options.uid,
          type: row.type,
          value: row.options.value,
          order: rowOrder,
          fk_id_project: projectId,
          textAlign: row.options.childStyle.textAlign
        },
        { uid: row.options.uid }
      );
      row.options.columns.forEach((pluginId, columnOrder) => {
        const plugin = container.plugins.find(el => el.options.uid === pluginId);
        updateOrCreate(
          Plugins,
          {
            ...plugin.options.childStyle,
            type: plugin.type,
            uid: plugin.options.uid,
            order: columnOrder,
            fk_id_row: row.options.uid,
            value: plugin.options.value,
            src: plugin.options.src,
            alt: plugin.options.alt,
            href: plugin.options.href
          },
          { uid: plugin.options.uid }
        );
      });
    });
  } catch (e) {
    next(e);
    return;
  }
  res.status(200).send({ message: 'Done !' });
});

module.exports = {
  required: ['container', 'projectId'],
  router
};
