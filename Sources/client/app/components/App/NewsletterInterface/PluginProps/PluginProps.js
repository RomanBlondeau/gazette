import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RowIcon from '@material-ui/icons/LineStyle';
import TextIcon from '@material-ui/icons/Textsms';
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

const PluginProps = ({ rows, plugins, id, onUpdate, classes }) => (
  <div className={css.contacts}>
    <p>Modify attributes of the selected element</p>
    {id && (
      <div className={css.sliderContainer}>
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

export default withStyles(styles)(PluginProps);