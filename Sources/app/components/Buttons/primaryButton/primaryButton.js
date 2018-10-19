// @flow
import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import styles from './primaryButton.scss';

type Props = {};

export default class DoSignUp extends Component<Props> {
  props: Props;

  render() {
    const { text } = this.props;
    return (
      <Button variant="contained" color="primary" className={styles.button} onClick={this.handleChange}>
        {text}
      </Button>
    );
  }
}
