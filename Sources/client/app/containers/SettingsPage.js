// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Homepage from '../components/Homepage/Homepage';
import TopNavbar from '../components/Navbars/TopNavbar/TopNavbar';
import SideNavbar from '../components/Navbars/SideNavbar/SideNavbar';
import routes from '../constants/routes.json';

type Props = {};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

class SettingsPage extends Component<Props> {
  props: Props;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopNavbar />
        <SideNavbar active={routes.SETTINGS} />
        <Homepage />
      </div>
    );
  }
}

SettingsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SettingsPage);
