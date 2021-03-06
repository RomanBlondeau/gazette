/* eslint-disable react/no-find-dom-node */
import React from 'react';
import { DropTarget } from 'react-dnd';
import Axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import pluginCreator from '../Plugin/PluginCreator';

import css from '../../Editor/Editor.scss';
import style from './View.scss';

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
            textAlign: '',
            fontWeight: ''
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
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

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
        setTimeout(() => this.setState({ loading: false }), 500);
      })
      .catch(err => {
        console.table(err);
      });
  }

  render() {
    const { connectDropTarget, isOver, rows } = this.props;
    const { loading } = this.state;

    return connectDropTarget(
      <div
        className={css.previsualisation}
        style={{ backgroundColor: isOver ? 'white' : 'white' }}
      >
        {loading ? (
          <div className={style.loading}>
            <CircularProgress />
          </div>
        ) : (
          rows.map((el, index) => {
            const Plugin = pluginCreator(el.type);
            console.log(index);
            return (
              <Plugin
                key={el.options.uid}
                rowId={el.options.uid}
                rowIndex={index}
                options={{ ...el.options }}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, viewTarget, collect)(View);
