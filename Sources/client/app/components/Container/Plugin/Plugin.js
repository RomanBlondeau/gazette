import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

import style from './Plugin.scss';

type Props = {
  name: string
};

const Types = {
  ITEM: 'plugin'
};

const itemSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },
  endDrag(props) {
    return {
      name: props.name
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Plugin extends Component<Props> {
  props: Props;

  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, isDragging, connectDragSource, src } = this.props;

    return connectDragSource(
      <div className={style.container}>
        <p>{name}</p>
      </div>
    );
  }
}

export default DragSource(Types.ITEM, itemSource, collect)(Plugin);
