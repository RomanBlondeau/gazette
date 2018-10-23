// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import styles from './ForgotPassword.scss';

type Props = {};

export default class ForgotPassword extends Component<Props> {
  props: Props;

  state = {};

  handleChange = () => {};

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button onClick={this.handleChange}>Forgot password</Button>
      </div>
    );
  }
}
