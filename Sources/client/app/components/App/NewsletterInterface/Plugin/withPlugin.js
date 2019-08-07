/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import css from '../../Editor/Editor.scss';

import containerAction from '../../../../actions/Container/container.actions';

const Types = {
  ITEM: 'plugin'
};

const itemSource = {
  beginDrag({ options, rowId, rowIndex }) {
    return {
      options,
      rowId,
      rowIndex
    };
  },

  endDrag({ options, rowId, rowIndex }) {
    return {
      options,
      rowId,
      rowIndex
    };
  }
};

function collect(conn, monitor) {
  return {
    connectDragSource: conn.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const mapStateToProps = state => ({
  plugins: state.container.plugins
});

const mapDispatchToProps = dispatch => ({
  dispatchToPlugin: options => {
    dispatch(containerAction.getFocus(options.uid));
  }
});

function withPlugin(WrappedComponent, isTools = false) {
  class Plugin extends Component {
    render() {
      const {
        connectDragSource,
        options,
        rowIndex,
        dispatchToPlugin,
        plugins
      } = this.props;

      return connectDragSource(
        isTools ? (
          <div className={css.plugin}>
            <WrappedComponent {...options} rowIndex={rowIndex} />
          </div>
        ) : (
          <div
            onClick={e => {
              dispatchToPlugin(options);
              e.stopPropagation();
            }}
          >
            <WrappedComponent
              rowIndex={rowIndex}
              {...options}
              plugins={plugins}
            />
          </div>
        )
      );
    }
  }

  const Source = DragSource(Types.ITEM, itemSource, collect)(Plugin);

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Source);
}

export default withPlugin;
