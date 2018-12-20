/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RowIcon from '@material-ui/icons/LineStyle';
import TextIcon from '@material-ui/icons/Textsms';
import ColorIcon from '@material-ui/icons/FormatPaint';
import PaddingIcon from '@material-ui/icons/SettingsEthernet';
import UrlIcon from '@material-ui/icons/Link';
import WidthIcon from '@material-ui/icons/SwapHoriz';
import HeightIcon from '@material-ui/icons/SwapVert';
import BaseIcon from '@material-ui/icons/Filter';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DeleteIcon from '@material-ui/icons/Delete';

import css from './PluginProps.scss';

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

function imageToBase64(event, onUpdate, plugin) {
  const e = {
    ...event,
    target: { ...event.target, value: '', name: event.target.name }
  };

  const reader = new FileReader();
  reader.addEventListener(
    'load',
    () => {
      e.target.value = reader.result;
      onUpdate(e, plugin, 'plugins');
    },
    false
  );

  reader.readAsDataURL(event.target.files[0]);
}

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
              primary={<span style={{ color: 'grey' }}>Local image</span>}
            />
          </ListItem>
          <ListItem>
            <label htmlFor="raised-button-file" className={css.labelFile}>
              Select an image
            </label>
            <input
              className={css.localImage}
              accept="image/*"
              id="raised-button-file"
              multiple
              type="file"
              name="src"
              onChange={e => imageToBase64(e, onUpdate, plugin)}
            />
          </ListItem>
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
              <HeightIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Height</span>}
            />
            <ListItemIcon>
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Width</span>}
            />
          </ListItem>
          <ListItem>
            <div style={{ marginRight: 5, width: '100%' }}>
              <TextField
                fullWidth
                value={plugin.options.childStyle.height}
                name="style.height"
                variant="filled"
                onChange={e => onUpdate(e, plugin, 'plugins')}
                label="Height"
              />
            </div>
            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                value={plugin.options.childStyle.width}
                name="style.width"
                variant="filled"
                onChange={e => onUpdate(e, plugin, 'plugins')}
                label="Width"
              />
            </div>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TextIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Description (alt)</span>}
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
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Font size</span>}
            />
            <ListItemIcon>
              <ColorIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Color</span>}
            />
          </ListItem>
          <ListItem>
            <div style={{ marginRight: 5, width: '100%' }}>
              <TextField
                fullWidth
                value={plugin.options.childStyle.fontSize}
                name="style.fontSize"
                variant="filled"
                onChange={e => onUpdate(e, plugin, 'plugins')}
                label="Font size"
              />
            </div>
            <div style={{ width: '100%' }}>
              <TextField
                fullWidth
                value={plugin.options.childStyle.color}
                name="style.color"
                variant="filled"
                onChange={e => onUpdate(e, plugin, 'plugins')}
                label="Color"
              />
            </div>
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
    form: ({ row, onUpdate, classes }) => (
      <Fragment>
        <List className={css.list}>
          <span className={css.pluginSelected}>Row</span>
          <ListItem>
            <ListItemIcon>
              <RowIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <span style={{ color: 'grey' }}>Row's number of columns</span>
              }
            />
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <InputLabel>Number of columns</InputLabel>
              <Select
                value={row.options.value}
                onChange={e => onUpdate(e, row, 'rows')}
                name="columns"
                className={classes.selectEmpty}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WidthIcon color="primary" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={<span style={{ color: 'grey' }}>Content alignment</span>}
            />
          </ListItem>
          <ListItem>
            <FormControl className={classes.formControl}>
              <InputLabel>Alignment</InputLabel>
              <Select
                value={row.options.childStyle.textAlign}
                onChange={e => onUpdate(e, row, 'rows')}
                name="style.textAlign"
                className={classes.selectEmpty}
              >
                <MenuItem value="left">Left</MenuItem>
                <MenuItem value="center">Center</MenuItem>
                <MenuItem value="right">Right</MenuItem>
              </Select>
            </FormControl>
          </ListItem>
        </List>
      </Fragment>
    )
  }
];

const PluginProps = ({
  rows,
  plugins,
  id,
  onUpdate,
  classes,
  deletePlugin,
  deleteRow
}) => (
  <div className={css.contacts}>
    {id && (
      <div>
        {plugins.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Fragment>
                <p>
                  Modify attributes of the selected element
                  <button
                    type="button"
                    className={css.deleteButton}
                    onClick={() => deletePlugin(id)}
                  >
                    <DeleteIcon style={{ fontSize: 22 }} />
                  </button>
                </p>
                <div className={css.sliderContainer}>
                  <Plugin
                    key={id}
                    plugin={elem}
                    onUpdate={onUpdate}
                    classes={classes}
                  />
                </div>
              </Fragment>
            );
          }
          return '';
        })}
        {rows.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Fragment>
                <p>
                  Modify attributes of the selected element
                  <button
                    type="button"
                    className={css.deleteButton}
                    onClick={() => deleteRow(id)}
                  >
                    <DeleteIcon style={{ fontSize: 22 }} />
                  </button>
                </p>
                <div className={css.sliderContainer}>
                  <Plugin
                    key={id}
                    row={elem}
                    onUpdate={onUpdate}
                    classes={classes}
                  />
                </div>
              </Fragment>
            );
          }
          return '';
        })}
      </div>
    )}
  </div>
);

export default withStyles(styles)(PluginProps);
