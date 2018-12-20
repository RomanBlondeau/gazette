import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextIcon from '@material-ui/icons/Textsms';
import PaddingIcon from '@material-ui/icons/SettingsEthernet';
import UrlIcon from '@material-ui/icons/Link';
import WidthIcon from '@material-ui/icons/SwapHoriz';
import HeightIcon from '@material-ui/icons/SwapVert';
import BaseIcon from '@material-ui/icons/Filter';
import { withStyles } from '@material-ui/core/styles';

import css from './Console.scss';

const styles = () => ({
  icon: {
    color: 'grey'
  },
  text: {
    color: 'grey'
  },
  root: {
    width: 300
  },
  formControl: {
    width: '100%'
  },
  textField: {
    fontSize: 10
  }
});

const formTypes = [
  {
    type: 'Image',
    form: ({ plugin, onUpdate, classes }) => (
      <Fragment>
        <p style={{ color: '#fff', margin: 20 }}>
          {`<table width="100%"><tr>`}
          {`</tr></table>`}
        </p>
      </Fragment>
    )
  },
  {
    type: 'Text',
    form: ({ plugin, onUpdate, classes }) => (
      <Fragment>
        <p style={{ color: '#fff', margin: 20 }}>
          {`<table width="100%"><tr>`}
          {`</tr></table>`}
        </p>
      </Fragment>
    )
  },
  {
    type: 'Link',
    form: ({ plugin, onUpdate, classes }) => (
      <Fragment>
        <p style={{ color: '#fff', margin: 20 }}>
          {`<table width="100%"><tr>`}
          {`</tr></table>`}
        </p>
      </Fragment>
    )
  },
  {
    type: '_',
    form: ({ row }) => (
      <Fragment>
        <p style={{ color: '#fff', margin: 20 }}>
          {`<table width="100%"><tr>`}
          {row.options.columns.map(() => `<td style="${rowStyle(row)}"></td>`)}
          {`</tr></table>`}
        </p>
      </Fragment>
    )
  }
];

function rowStyle(row) {
  let style = '';
  Object.keys(row.options.childStyle).forEach(obj => {
    if (row.options.childStyle[obj])
      style += `${obj.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
        row.options.childStyle[obj]
      }; `;
  });
  return style;
}

const Console = ({ rows, plugins, id, onUpdate, classes }) => (
  <div className={css.contacts}>
    <p style={{ textAlign: 'center' }}>Code rendered</p>
    {id && (
      <div>
        {plugins.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Plugin
                key={id}
                plugin={elem}
                onUpdate={onUpdate}
                classes={classes}
              />
            );
          }
          return '';
        })}
        {rows.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Plugin
                key={id}
                row={elem}
                onUpdate={onUpdate}
                classes={classes}
              />
            );
          }
          return '';
        })}
      </div>
    )}
  </div>
);

export default withStyles(styles)(Console);
