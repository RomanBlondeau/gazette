import React from 'react';
import { DropTarget } from 'react-dnd';

const Types = {
  ITEM: 'plugin'
};

const viewTarget = {
  drop(props, monitor) {
    const { update, rows, rowId, index } = props;
    const item = monitor.getItem();
    const rowUpdate = rows.find(el => el.options.uid === rowId);

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
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const Column = ({
  connectDropTarget,
  Plugin,
  isOver,
  pluginOptions,
  isEmpty,
  rows,
  rowId
}) => {
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
        <Plugin key={pluginOptions.uid} options={{ ...pluginOptions }} />
      )}
    </td>
  );
};

export default DropTarget(Types.ITEM, viewTarget, collect)(Column);
