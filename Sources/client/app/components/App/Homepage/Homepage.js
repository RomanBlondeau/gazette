// @flow
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

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

class Homepage extends Component<Props> {
  props: Props;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>Lorem ipsum</p>
      </div>
    );
  }
}

export default withStyles(styles)(Homepage);
