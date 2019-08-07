import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { findDOMNode } from 'react-dom';

const Types = {
  ITEM: 'plugin'
};

const viewTarget = {
  drop(props, monitor) {
    const { update, rows, rowId, index, rowIndex } = props;
    const item = monitor.getItem();
    const rowUpdate = rows.find(el => el.options.uid === rowId);

    console.log(rowId);
    console.log(rowIndex);

    if (item.options.uid === undefined && item.options.type !== '_') {
      update(
        {
          type: item.options.type,
          options: {
            uid: Math.floor(Math.random() * 1000000),
            type: item.options.type,
            href: '',
            alt: '',
            columns: [0],
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
        },
        rowUpdate,
        index
      );
    }
  },

  hover(props, monitor, component) {
    const { swap, rowId, rowIndex } = props;
    const item = monitor.getItem();

    if (item.rowId && item.rowId !== rowId) {
      const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      if (item.rowIndex < rowIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (item.rowIndex > rowIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      swap(item.rowId, rowId);
      item.RowIndex = rowIndex;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Column extends Component {
  render() {
    const {
      connectDropTarget,
      Plugin,
      isOver,
      pluginOptions,
      isEmpty,
      rows,
      rowId,
      rowIndex
    } = this.props;
    const row = rows.find(el => el.options.uid === rowId);

    return connectDropTarget(
      <td
        style={{
          textAlign:
            row.options.childStyle.textAlign === undefined
              ? 'center'
              : row.options.childStyle.textAlign,
          border: isOver ? 'dashed 2px #00ff94' : 'dashed 1px grey',
          color: 'grey',
          marginRight: '5px',
          marginLeft: '5px'
        }}
      >
        {isEmpty ? (
          <p>Drop an element here</p>
        ) : (
          <Plugin
            key={pluginOptions.uid}
            rowId={rowId}
            rowIndex={rowIndex}
            options={{ ...pluginOptions }}
          />
        )}
      </td>
    );
  }
}

export default DropTarget(Types.ITEM, viewTarget, collect)(Column);
