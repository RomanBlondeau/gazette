// @flow
import React, { Component } from 'react';
import styles from './RememberMe.scss';
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

type Props = {};

export default class RememberMe extends Component<Props> {
  props: Props;

  state = {
    checked: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { checked } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={this.handleChange('checked')}
                value="checked"
                color="primary"
              />
            }
            label="Remember me"
          />
        </FormGroup>
      </div>
    );
  }
}
