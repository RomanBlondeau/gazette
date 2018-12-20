import containerConstants from '../../constants/Container/container.constants';

function updatePlugin(plugin) {
  return { type: containerConstants.UPDATE_PLUGIN, plugin };
}

function getFocus(uid) {
  return { type: containerConstants.GET_FOCUS, uid };
}

function deletePlugin(plugin) {
  return { type: containerConstants.DELETE_CONTAINER, plugin };
}

function addPluginToRow(plugin, rowUpdate, columnId) {
  return {
    type: containerConstants.ADD_PLUGIN_CONTAINER,
    toAdd: { plugin, rowUpdate, columnId }
  };
}

function addRow(row) {
  return {
    type: containerConstants.ADD_ROW,
    row
  };
}

function setProjectId(projectId) {
  return {
    type: containerConstants.SET_PROJECT_ID,
    projectId
  };
}

function initContainer(container) {
  return {
    type: containerConstants.INIT_CONTAINER,
    container: container.data.container
  };
}

const container = {
  addPluginToRow,
  updatePlugin,
  deletePlugin,
  getFocus,
  addRow,
  initContainer,
  setProjectId
};

export default container;
