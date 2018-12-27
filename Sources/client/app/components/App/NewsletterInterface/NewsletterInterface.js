/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';
import Snackbar from '@material-ui/core/Snackbar';

import View from '../../../containers/Container/PluginViewContainer';
import Plugin from './PluginView/PluginView';
import PluginProps from '../../../containers/Container/PluginPropsContainer';
import config from '../../../config/api';

import style from './NewsletterInterface.scss';
import Console from '../../../containers/Container/ConsoleContainer';

const mapStateToProps = state => ({
  projectId: state.container.projectId,
  rows: state.container.rows,
  plugins: state.container.plugins
});

class NewsletterInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      log: ''
    };
  }

  saveProject = (projectId: number, rows: Array, plugins: Array) => {
    Axios.post(
      config.projects.save,
      {
        container: {
          rows,
          plugins
        },
        projectId
      },
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`
        }
      }
    )
      .then(res => {
        this.setState({
          log: 'Project saved successfully',
          saveIcon: <CheckIcon />,
          open: true
        });
        console.log(res.message);
      })
      .catch(e => {
        this.setState({
          log: 'An error occured, project not saved',
          saveIcon: <ErrorIcon />,
          open: true
        });
        console.error(e);
      });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const { projectId, rows, plugins } = this.props;
    const { open, log, saveIcon } = this.state;
    return (
      <Fragment>
        <button
          type="button"
          onClick={() => this.saveProject(projectId, rows, plugins)}
          className={style.saveButton}
        >
          <SaveIcon style={{ fontSize: 22 }} />
          <span style={{ position: 'relative', bottom: 7, marginLeft: 5 }}>
            Save project
          </span>
        </button>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={
            <div>
              {saveIcon}
              <span id="message-id" className={style.saveIcon}>
                {log}
              </span>
            </div>
          }
        />
        <View />
        <div className={style.containerRow}>
          <Plugin />
          <PluginProps />
          <Console />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(NewsletterInterface);
