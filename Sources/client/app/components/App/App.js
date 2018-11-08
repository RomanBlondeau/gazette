// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router';
import TopNavbar from './Navbars/TopNavbar/TopNavbar';
import SideNavbar from './Navbars/SideNavbar/SideNavbar';
import routes from '../../constants/routes.json';
import Homepage from './Homepage/Homepage';

type Props = {
  classes: object
};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

class App extends Component<Props> {
  props: Props;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopNavbar />
        <SideNavbar active={routes.HOME} />
      </div>
    );
  }
}

export default withStyles(styles)(App);
