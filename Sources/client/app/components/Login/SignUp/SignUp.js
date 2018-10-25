// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import routes from '../../../constants/routes';
import styles from './SignUp.scss';
import history from '../../../helpers/history';

type Props = {};

export default class SignUp extends Component<Props> {
  props: Props;

  state = {};

  handleChange = () => {
    history.push(routes.SIGNUP);
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="outlined"
          className={styles.button}
          onClick={this.handleChange}
        >
          Sign Up
        </Button>
      </div>
    );
  }
}
