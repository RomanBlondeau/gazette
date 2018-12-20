import containerConstants from '../../constants/Container/container.constants';

function getOption(targets, toUpdate, target) {
  let options;

  if (targets.length === 1 && targets[0] === 'columns') {
    options = {
      ...toUpdate.options,
      [targets[0]]: [...Array(parseInt(target.value))].map(() => '_'),
      value: target.value
    };
  } else if (targets.length === 1) {
    options = {
      ...toUpdate.options,
      [targets[0]]: target.value
    };
  } else {
    options = {
      ...toUpdate.options,
      childStyle: {
        ...toUpdate.options.childStyle,
        [targets[1]]: target.value
      }
    };
  }

  return options;
}

function update(state, { toUpdate, target, name }) {
  const targets = target.name.split('.');
  const options = getOption(targets, toUpdate, target);

  return {
    ...state,
    [name]: state[name].map(elem => {
      if (elem.options.uid === toUpdate.options.uid) {
        return {
          ...toUpdate,
          options
        };
      }
      return elem;
    })
  };
}

function getFocus(state, uid) {
  return {
    ...state,
    id: uid
  };
}

function deletePlugin(state, uid) {
  return {
    ...state,
    plugins: state.plugins.filter(plugin => plugin.options.uid !== uid)
  };
}

function addPluginInContainer(state, { plugin, rowUpdate, columnId }) {
  return {
    ...state,
    plugins: [...state.plugins, plugin],
    rows: state.rows.map(row => {
      if (row.options.uid === rowUpdate.options.uid) {
        return {
          ...row,
          options: {
            ...row.options,
            columns: row.options.columns.map((el, index) => {
              if (index === columnId) {
                return plugin.options.uid;
              }
              return el;
            })
          }
        };
      }
      return row;
    })
  };
}

function addRow(state, row) {
  return {
    ...state,
    rows: [...state.rows, row]
  };
}

function initProject(state, { rows, columns: plugins }) {
  return {
    ...state,
    rows,
    plugins
  };
}

function setProjectId(state, projectId) {
  return {
    ...state,
    projectId
  };
}

function container(
  state = { plugins: [], rows: [], id: undefined, projectId: undefined },
  action
) {
  switch (action.type) {
    case containerConstants.INIT_CONTAINER:
      return initProject(state, action.container);
    case containerConstants.SET_PROJECT_ID:
      return setProjectId(state, action.projectId);
    case containerConstants.ADD_ROW:
      return addRow(state, action.row);
    case containerConstants.UPDATE_PLUGIN:
      return update(state, action.plugin);
    case containerConstants.GET_FOCUS:
      return getFocus(state, action.uid);
    case containerConstants.DELETE_CONTAINER:
      return deletePlugin(state, action.plugin.options.uid);
    case containerConstants.ADD_PLUGIN_CONTAINER:
      return addPluginInContainer(state, action.toAdd);
    default:
      return state;
  }
}

export default container;
