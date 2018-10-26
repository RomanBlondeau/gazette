// @flow
import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button/Button';
import PropTypes from 'prop-types';
import styles from './DoSignUp.scss';
import userActions from '../../../actions/user.actions';

type Props = {};

class DoSignUp extends React.Component {
  props: Props;

  handleChange = () => {
    const {
      password,
      username,
      firstName,
      lastName,
      email,
      dispatch
    } = this.props;
    if (password && username && firstName && lastName && email) {
      const user = { password, username, firstName, lastName, email };
      dispatch(userActions.register(user));
    }
  };

  checkDisabled() {
    const {
      password,
      username,
      firstName,
      lastName,
      email,
      confirmPassword
    } = this.props;
    return !(
      password !== '' &&
      username !== '' &&
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      confirmPassword !== ''
    );
  }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          className={styles.button}
          onClick={this.handleChange}
          disabled={this.checkDisabled()}
        >
          Sign up
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

export default connect(mapStateToProps)(DoSignUp);

DoSignUp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  password: PropTypes.string,
  username: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  confirmPassword: PropTypes.string
};

DoSignUp.defaultProps = {
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  confirmPassword: ''
};
