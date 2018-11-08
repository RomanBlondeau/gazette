// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoPasswordForm.scss';
import userActions from '../../../../actions/User/user.actions';

type Props = {};

class DoPasswordForm extends React.Component {
  props: Props;

  handleChange = () => {
    const { token, password, dispatch } = this.props;
    if (token && password) {
      dispatch(userActions.login(token, password));
    }
  };

  checkDisabled() {
    const { password, token, confirmPassword } = this.props;
    return !(
      password !== '' &&
      password.length >= 8 &&
      token !== '' &&
      confirmPassword !== ''
    );
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={this.handleChange}
          disabled={this.checkDisabled()}
        >
          Update my password
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

export default connect(mapStateToProps)(DoPasswordForm);

DoPasswordForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  token: PropTypes.string
};

DoPasswordForm.defaultProps = {
  password: '',
  confirmPassword: '',
  token: ''
};
