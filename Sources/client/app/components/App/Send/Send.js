// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import css from './Send.scss';
import history from '../../../helpers/history';
import SendFormContainer from '../../../containers/SendInterface/SendForm/SendFormContainer';
import SendContactsContainer from '../../../containers/SendInterface/SendContacts/SendContactsContainer';
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle';
import Done from '@material-ui/icons/Done';
import Error from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import routes from '../../../constants/routes.json';
import axios from 'axios';
import config from '../../../config/api';

type Props = {};

const styles = () => ({
  root: {
    display: 'flex',
    backgroundColor: '#2E2E43',
    height: '100%'
  },
  iconSuccess: {
    fontSize: 60,
    color: '#34D082'
  },
  iconError: {
    fontSize: 60,
    color: '#f50057'
  }
});

class Send extends Component<Props> {
  props: Props;

  state = {
    open: false,
    loading: false,
    success: false,
    error: ''
  };

  checkInfo = () => {
    const { sendInfo } = this.props;
    return !(sendInfo.object && sendInfo.to);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    this.handleButtonClick();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleButtonClick = () => {
    const { sendInfo, email } = this.props;
    const { loading, success, error } = this.state;
    if (!loading) {
      this.setState(
        {
          success: false,
          loading: true
        },
        () => {
          const data = {
            to: sendInfo.to,
            subject: sendInfo.object,
            body: email
          };
          axios
            .post(`${config.projects.send}`, data, {
              headers: {
                Authorization: `Bearer ${
                  JSON.parse(localStorage.getItem('user')).token
                }`
              }
            })
            .then(() => {
              this.setState({
                loading: false,
                success: true
              });
            })
            .catch(err => {
              this.setState({
                loading: false,
                success: false,
                error: err.response.data.message
              });
            });
        }
      );
    }
  };

  render() {
    const { classes, sendInfo } = this.props;
    const { open, loading, success, error } = this.state;
    const project = this.props.projects.find(
      el => el.id === parseInt(this.props.match.params.projectId, 10)
    );
    return (
      <div className={classes.root}>
        <div className={css.contentContainer}>
          <div className={css.titleContainer}>
            <button
              className={css.mainButton}
              onClick={() => history.push(`/edit/${project.id}`)}
            >{`< Go back`}</button>
            <h3>Send - {project.name}</h3>
            <button
              className={css.sendButton}
              style={{ backgroudColor: 'green' }}
              disabled={this.checkInfo()}
              onClick={() => {
                this.handleClickOpen();
              }}
            >
              {`Send`}
            </button>
          </div>

          <Dialog
            open={open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {!loading ? (
                <div>
                  {success ? (
                    <div className={css.validContainer}>
                      <Done className={classes.iconSuccess} />
                      <p className={css.successText}>
                        Email successfully sent to: {sendInfo.to}
                      </p>
                      <button
                        onClick={() => history.push(routes.HOME)}
                        className={css.backButton}
                      >
                        Back to projects' page
                      </button>
                    </div>
                  ) : (
                    <div className={css.validContainer}>
                      <Error className={classes.iconError} />
                      <p className={css.errorText}>An error occured: {error}</p>
                    </div>
                  )}
                </div>
              ) : (
                <CircularProgress />
              )}
            </DialogTitle>
          </Dialog>

          <div className={css.interfaceContainer}>
            <div className={css.previsualisationContainer}>
              <div className={css.previsualisation} />
            </div>
            <div className={css.toolsContainer}>
              <div className={css.selector}>
                <SendFormContainer />
              </div>
              <div className={css.contacts}>
                <SendContactsContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Send.propTypes = {
  classes: PropTypes.object.isRequired,
  sendInfo: PropTypes.object.isRequired
};

export default withStyles(styles)(Send);
