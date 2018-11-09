// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

type Props = {};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  }
});

class Editor extends Component<Props> {
  props: Props;

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <p>Editor</p>
      </div>
    );
  }
}

Editor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Editor);
