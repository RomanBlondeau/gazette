/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { DropTarget } from 'react-dnd';
import Axios from 'axios';
import pluginCreator from '../Plugin/PluginCreator';

import css from '../../Editor/Editor.scss';

const Types = {
  ITEM: 'plugin'
};

const viewTarget = {
  drop(props, monitor) {
    const { update } = props;
    const item = monitor.getItem();

    if (item.options.uid === undefined && item.options.type === '_') {
      // TODO factory of item type to get only the good options
      update({
        type: item.options.type,
        options: {
          uid: Math.floor(Math.random() * 1000000), // TODO real uid
          type: item.options.type,
          columns: ['_'],
          href: '',
          alt: '',
          value: '',
          src: '',
          childStyle: {
            width: '',
            height: '',
            padding: '',
            fontSize: '',
            color: '',
            textAlign: ''
          }
        }
      });
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

type Props = {
  initContainer: func,
  connectDropTarget: func,
  isOver: boolean,
  // eslint-disable-next-line flowtype/no-weak-types
  rows: any,
  projectId: number
};

class View extends React.Component<Props> {
  componentDidMount() {
    const { initContainer, projectId } = this.props;

    Axios.get(`http://localhost:3000/projects/data/${projectId}`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem('user')).token
        }`
      }
    })
      .then(res => {
        initContainer(res);
      })
      .catch(err => {
        console.table(err);
      });
  }

  render() {
    const { connectDropTarget, isOver, rows } = this.props;

    return connectDropTarget(
      <div
        className={css.previsualisation}
        style={{ backgroundColor: isOver ? 'white' : 'white' }}
      >
        {rows.map(el => {
          const Plugin = pluginCreator(el.type);
          return <Plugin key={el.options.uid} options={{ ...el.options }} />;
        })}
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, viewTarget, collect)(View);
