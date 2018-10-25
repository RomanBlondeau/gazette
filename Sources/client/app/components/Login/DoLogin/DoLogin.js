// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoLogin.scss';
import Alert from '../../Alert/Alert';
import userActions from '../../../actions/user.actions';

type Props = {};

class DoLogin extends React.Component {
  props: Props;

  state = {
    errorOpen: false,
    errorMessage: ''
  };

  handleChange = () => {
    const { username, password, dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  handleErrorClose = () => {
    this.setState({ errorOpen: false });
  };

  render() {
    const { errorMessage, errorOpen } = this.state;
    return (
      <div className={styles.container} data-tid="container">
        <Button
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={this.handleChange}
        >
          Login
        </Button>

        <Alert
          errorMessage={errorMessage}
          errorOpen={errorOpen}
          handleClose={this.handleErrorClose}
        />
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

export default connect(mapStateToProps)(DoLogin);

DoLogin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  password: PropTypes.string,
  username: PropTypes.string
};

DoLogin.defaultProps = {
  password: '',
  username: ''
};
