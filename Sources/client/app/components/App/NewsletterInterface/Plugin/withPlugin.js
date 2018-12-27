/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import css from '../../Editor/Editor.scss';

import containerAction from '../../../../actions/Container/container.actions';

const Types = {
  ITEM: 'plugin'
};

const itemSource = {
  beginDrag({ options, rowId }) {
    return {
      options,
      rowId
    };
  },

  endDrag({ options, rowId }) {
    console.log(rowId);
    return {
      options,
      rowId
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
  const Source = DragSource(Types.ITEM, itemSource, collect)(
    ({ connectDragSource, options, dispatchToPlugin, plugins }) =>
      connectDragSource(
        isTools ? (
          <div className={css.plugin}>
            <WrappedComponent {...options} />
          </div>
        ) : (
          <div
            onClick={e => {
              dispatchToPlugin(options);
              e.stopPropagation();
            }}
          >
            <WrappedComponent {...options} plugins={plugins} />
          </div>
        )
      )
  );

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Source);
}

export default withPlugin;
