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

    console.log(props);
    console.table(item);
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
              padding: ''
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
  isEmpty
}) =>
  connectDropTarget(
    <td
      style={{
        textAlign: 'center',
        backgroundColor: isOver ? 'grey' : 'lightgrey',
        marginRight: '5px',
        marginLeft: '5px'
      }}
    >
      {isEmpty ? (
        <p>tozzi</p>
      ) : (
        <Plugin key={pluginOptions.uid} options={{ ...pluginOptions }} />
      )}
    </td>
  );

export default DropTarget(Types.ITEM, viewTarget, collect)(Column);
