import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import style from './View.scss';

const Types = {
  ITEM: 'plugin'
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class View extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);

    this.state = {
      plugin: ['toto', 'tozzo', 'tozza']
    };
  }

  render() {
    const { connectDropTarget } = this.props;
    const { plugin } = this.state;

    return connectDropTarget(
      <div className={style.container}>
        <p>toto</p>
      </div>
    );
  }
}

export default DropTarget(Types.ITEM, {}, collect)(View);
