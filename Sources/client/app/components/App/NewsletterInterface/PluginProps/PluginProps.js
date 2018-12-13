import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

import css from '../../Editor/Editor.scss';

const formTypes = [
  {
    type: 'Image',
    form: ({ plugin, onUpdate }) => (
      <Fragment>
        <TextField
          value={plugin.options.src}
          name="src"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="Image in base64"
        />
        <TextField
          value={plugin.options.alt}
          name="alt"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="Description of the image"
        />
        <TextField
          value={plugin.options.childStyle.height}
          name="style.height"
          type="number"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="Height"
        />
        <TextField
          value={plugin.options.childStyle.width}
          name="style.width"
          type="number"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="Width"
        />
      </Fragment>
    )
  },
  {
    type: 'Text',
    form: ({ plugin, onUpdate }) => (
      <Fragment>
        <TextField
          value={plugin.options.value}
          name="value"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="text"
        />
        <TextField
          value={plugin.options.childStyle.padding}
          name="style.padding"
          variant="filled"
          type="number"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="padding"
        />
      </Fragment>
    )
  },
  {
    type: 'Link',
    form: ({ plugin, onUpdate }) => (
      <Fragment>
        <TextField
          value={plugin.options.value}
          name="value"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="text"
        />
        <TextField
          value={plugin.options.href}
          name="href"
          variant="filled"
          onChange={e => onUpdate(e, plugin, 'plugins')}
          label="href"
        />
      </Fragment>
    )
  },
  {
    type: '_',
    form: ({ row, onUpdate }) => (
      <Fragment>
        <TextField
          value={row.options.value}
          name="columns"
          variant="filled"
          onChange={e => onUpdate(e, row, 'rows')}
          label="columns"
          type="number"
        />
        <TextField
          value={row.options.childStyle.padding}
          name="style.padding"
          variant="filled"
          onChange={e => onUpdate(e, row, 'rows')}
          label="columns"
          type="number"
        />
      </Fragment>
    )
  }
];

const PluginProps = ({ rows, plugins, id, onUpdate }) => (
  <div className={css.contacts}>
    {!id ? (
      <p>Plugins props</p>
    ) : (
      <Fragment>
        {plugins.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return <Plugin key={id} plugin={elem} onUpdate={onUpdate} />;
          }
          return '';
        })}
        {rows.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return <Plugin key={id} row={elem} onUpdate={onUpdate} />;
          }
          return '';
        })}
      </Fragment>
    )}
  </div>
);

export default PluginProps;
