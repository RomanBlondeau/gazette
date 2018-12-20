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
        <List className={css.list}>
          <span className={css.pluginSelected}>Image</span>
          <ListItem>
            <ListItemIcon>
              <BaseIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Base64 image</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              InputClassName={classes.textField}
              value={plugin.options.src}
              name="src"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Image in base64"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TextIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Description</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.alt}
              name="alt"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Description of the image"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <HeightIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Height</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.height}
              name="style.height"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Height"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Width</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.width}
              name="style.width"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Width"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaddingIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Padding</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.padding}
              name="style.padding"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="padding"
            />
          </ListItem>
        </List>
      </Fragment>
    )
  },
  {
    type: 'Text',
    form: ({ plugin, onUpdate, classes }) => (
      <Fragment>
        <List className={css.list}>
          <span className={css.pluginSelected}>Text</span>
          <ListItem>
            <ListItemIcon>
              <TextIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Text</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              className={classes.textField}
              value={plugin.options.value}
              multiline
              variant="filled"
              name="value"
              rows="4"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="text"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PaddingIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Padding</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.padding}
              name="style.padding"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="padding"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Font size</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.fontSize}
              name="style.fontSize"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Font size"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Color</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              fullWidth
              value={plugin.options.childStyle.color}
              name="style.color"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Color"
            />
          </ListItem>
        </List>
      </Fragment>
    )
  },
  {
    type: 'Link',
    form: ({ plugin, onUpdate, classes }) => (
      <Fragment>
        <List className={css.list}>
          <span className={css.pluginSelected}>Link</span>
          <ListItem>
            <ListItemIcon>
              <TextIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Text</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              value={plugin.options.value}
              fullWidth
              name="value"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="text"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <UrlIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>URL</span>}
            />
          </ListItem>
          <ListItem>
            <TextField
              value={plugin.options.href}
              fullWidth
              name="href"
              variant="filled"
              onChange={e => onUpdate(e, plugin, 'plugins')}
              label="Url"
            />
          </ListItem>
        </List>
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
