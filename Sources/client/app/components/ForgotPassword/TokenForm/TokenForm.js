// @flow
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Input from '@material-ui/core/Input/Input';
import PropTypes from 'prop-types';
import styles from './TokenForm.scss';
import DoTokenForm from './DoTokenForm/DoTokenForm';
import Grid from '@material-ui/core/Grid/Grid';

type Props = {};

export default class TokenForm extends Component<Props> {
  props: Props;

  render() {
    const { email, onUpdate } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <Grid item xs={12}>
          <FormControl className={styles.form}>
            <InputLabel htmlFor="adornment-email">Email</InputLabel>
            <Input
              id="adornment-email"
              type="text"
              value={email}
              name="email"
              onChange={onUpdate}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <DoTokenForm />
        </Grid>
      </div>
    );
  }
}

TokenForm.propTypes = {
  email: PropTypes.string,
  onUpdate: PropTypes.func.isRequired
};

TokenForm.defaultProps = {
  email: ''
};
