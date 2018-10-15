// @flow
import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import styles from './Login.scss';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Grid container spacing={24} className={styles.container}>
          <Grid item xs={6} className={styles.leftContent} />
          <Grid item xs={6} className={styles.rightContent}>
            <h2 className={styles.mainTitle}>Gazette</h2>
            <p className={styles.subTitle}>Please login to your account</p>

          </Grid>
        </Grid>
      </div>
    );
  }
}
