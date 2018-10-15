// @flow
import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import styles from './DoLogin.scss';

type Props = {};

export default class DoLogin extends Component<Props> {
  props: Props;

  state = {
  };

  handleChange = () => {

  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button variant="contained" color="primary" className={styles.button} onClick={this.handleChange}>
          Login
        </Button>
      </div>
    );
  }
}
