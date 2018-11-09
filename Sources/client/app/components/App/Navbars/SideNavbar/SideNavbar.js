/* eslint-disable react/forbid-prop-types */
// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/HomeRounded';
import EmailIcon from '@material-ui/icons/Email';
import EventIcon from '@material-ui/icons/Event';
import HelpIcon from '@material-ui/icons/Help';
import SettingIcon from '@material-ui/icons/Settings';
import UserIcon from '@material-ui/icons/AccountCircle';
import routes from '../../../../constants/routes.json';
import history from '../../../../helpers/history';
import css from './SideNavbar.scss';

type Props = {};

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#43425D',
    color: '#fff',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);'
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

const iconStyle = {
  color: '#A5A4BF'
};

class SideNavbar extends Component<Props> {
  props: Props;

  state = {
    pageList: [
      { icon: <HomeIcon />, page: routes.HOME },
      { icon: <UserIcon />, page: routes.CONTACTS },
      { icon: <EmailIcon />, page: routes.EDIT },
      { icon: <EventIcon />, page: routes.CALENDAR },
      { icon: <HelpIcon />, page: routes.HELP },
      { icon: <SettingIcon />, page: routes.SETTINGS }
    ]
  };

  menuSwitchPage = index => {
    const { pageList } = this.state;
    history.push(pageList[index].page);
  };

  render() {
    const { classes, active } = this.props;
    const { pageList } = this.state;

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
          <h3 className={css.mainTitle}>Gazette</h3>
        </div>
        <List>
          {['Home', 'Contacts', 'Edit', 'Calendar', 'Help', 'Settings'].map(
            (text, index) => (
              <ListItem
                button
                key={text}
                onClick={() => this.menuSwitchPage(index)}
                selected={active === pageList[index].page}
              >
                <ListItemIcon style={iconStyle}>
                  {pageList[index].icon}
                </ListItemIcon>
                <ListItemText disableTypography primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    );
  }
}

SideNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired
};

export default withStyles(styles)(SideNavbar);
