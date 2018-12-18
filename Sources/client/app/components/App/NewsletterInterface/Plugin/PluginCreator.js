import React from 'react';
import Column from '../../../../containers/Container/ColumnContainer';
import css from './PluginCreator.scss';

import withPlugin from './withPlugin';

const plugin = [
  {
    name: 'Image',
    plugin: withPlugin(
      ({ src, alt, childStyle: style }) =>
        !src && !alt ? (
          <p style={{ color: '#000' }} className={css.withPluginText}>
            Click here to access <span style={{ color: '#0083ff' }}>image</span>{' '}
            props
          </p>
        ) : (
          <img
            style={{
              color: '#000',
              height: style.height,
              width: style.width,
              padding: style.padding
            }}
            src={`${src}`}
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
          <p style={{ color: '#000' }} className={css.withPluginText}>
            Click here to access <span style={{ color: '#0083ff' }}>text</span>{' '}
            props
          </p>
        ) : (
          <p
            style={{
              color: style.color,
              fontSize: style.fontSize,
              padding: style.padding
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
        !value ? (
          <p className={css.withPluginText} style={{ color: '#000' }}>
            Click here to access <span style={{ color: '#0083ff' }}>link</span>{' '}
            props
          </p>
        ) : (
          <a style={{ color: '#000' }}>{value}</a>
        )
    )
  },
  {
    name: '_',
    plugin: withPlugin(({ columns, plugins, uid }) => (
      <table style={{ width: '100%' }} className={css.withPlugin}>
        <tbody>
          <tr>
            <td
              style={{
                width: '15%',
                backgroundColor: '#0083ff',
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5
              }}
            />
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
            <td
              style={{
                width: '15%',
                backgroundColor: '#0083ff',
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5
              }}
            />
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
