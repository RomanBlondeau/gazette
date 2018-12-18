/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import { connect } from 'react-redux';
import HTML5backend from 'react-dnd-html5-backend';
import Axios from 'axios';

import { Button } from '@material-ui/core';
import View from '../../../containers/Container/PluginViewContainer';
import Plugin from './PluginView/PluginView';
import PluginProps from '../../../containers/Container/PluginPropsContainer';
import config from '../../../config/api';

import style from './NewsletterInterface.scss';

const mapStateToProps = state => ({
  projectId: state.container.projectId,
  rows: state.container.rows,
  plugins: state.container.plugins
});

function saveProject(projectId: number, rows: Array, plugins: Array) {
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
      console.log(res.message);
    })
    .catch(e => {
      console.error(e);
    });
}

const NewsletterInterface = ({ projectId, rows, plugins }) => (
  <Fragment>
    <Button type="button" onClick={() => saveProject(projectId, rows, plugins)}>
      Save
    </Button>
    <View />
    <div className={style.containerRow}>
      <Plugin />
      <PluginProps />
    </div>
  </Fragment>
);

export default connect(
  mapStateToProps,
  null
)(NewsletterInterface);
