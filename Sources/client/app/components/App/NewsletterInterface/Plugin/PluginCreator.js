import React from 'react';
import Column from '../../../../containers/Container/ColumnContainer';

import withPlugin from './withPlugin';

const plugin = [
  {
    name: 'Image',
    plugin: withPlugin(
      ({ src, alt, childStyle: style }) =>
        !src && !alt ? (
          <p style={{ color: '#000' }}>click here to access image props</p>
        ) : (
          <img
            style={{
              color: '#000',
              height: `${style.height}px`,
              width: `${style.width}px`
            }}
            src={`data:image/png;base64, ${src}`}
            alt={alt}
          />
        )
    )
  },
  {
    name: 'Text',
    plugin: withPlugin(
      ({ value, childStyle: style }) =>
        !value ? (
          <p style={{ color: '#000' }}>click here to access text props</p>
        ) : (
          <p
            style={{
              color: '#000',
              padding: `${style.padding}px`
            }}
          >
            {value}
          </p>
        )
    )
  },
  {
    name: 'Link',
    plugin: withPlugin(
      ({ value }) =>
        !value ? <p>click here to access text props</p> : <a>{value}</a>
    )
  },
  {
    name: '_',
    plugin: withPlugin(({ columns, plugins, uid }) => (
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td style={{ width: '15%', backgroundColor: 'blue' }} />
            {columns.map((column, index) => {
              if (column === '_') {
                return <Column isEmpty rowId={uid} index={index} key={index} />;
              }
              const pluginResult = plugins.find(
                el => el.options.uid === column
              );
              const Plugin = pluginCreator(pluginResult.type);

              return (
                <Column
                  Plugin={Plugin}
                  pluginOptions={pluginResult.options}
                  rowId={uid}
                  index={index}
                  key={index}
                />
              );
            })}
            <td style={{ width: '15%', backgroundColor: 'blue' }} />
          </tr>
        </tbody>
      </table>
    ))
  }
];

const pluginCreator = name => {
  const Component = plugin.find(el => el.name === name);

  if (Component) {
    return Component.plugin;
  }
  return '';
};

export default pluginCreator;
