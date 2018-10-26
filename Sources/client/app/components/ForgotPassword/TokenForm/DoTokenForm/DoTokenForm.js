// @flow
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './DoTokenForm.scss';
import userActions from '../../../../actions/user.actions';

type Props = {};

class DoTokenForm extends React.Component {
  props: Props;

  handleChange = () => {
    const { email, dispatch } = this.props;
    if (email) {
      const user = { email };
      dispatch(userActions.forgotPassword(user));
    }
  };

  checkDisabled() {
    const { email } = this.props;
    return !(email !== '');
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
          Send me a recovery token
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

export default connect(mapStateToProps)(DoTokenForm);

DoTokenForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string
};

DoTokenForm.defaultProps = {
  email: ''
};
