// @flow
import React, { Component } from 'react';
import Button from "@material-ui/core/Button/Button";
import styles from './DoSignUp.scss';

type Props = {};

export default class DoSignUp extends Component<Props> {
  props: Props;

  handleChange = () => {

  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button variant="contained" className={styles.button} onClick={this.handleChange}>
          Sign up
        </Button>
      </div>
    );
  }
}
