// @flow
import React, { Component } from 'react';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes';
import styles from './SignUp.scss';

type Props = {};

export default class SignUp extends Component<Props> {
  props: Props;

  state = {};

  handleChange = () => {};

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Link to={routes.SIGNUP}>
          <Button
            variant="outlined"
            className={styles.button}
            onClick={this.handleChange}
          >
            Sign Up
          </Button>
        </Link>
      </div>
    );
  }
}
