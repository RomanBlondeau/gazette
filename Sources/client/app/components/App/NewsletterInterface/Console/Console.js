import React, { Fragment } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { withStyles } from '@material-ui/core/styles';

import css from './Console.scss';

const styles = () => ({
  icon: {
    color: 'grey'
  },
  text: {
    color: 'grey'
  },
  root: {
    width: 300
  },
  formControl: {
    width: '100%'
  },
  textField: {
    fontSize: 10
  }
});

const formTypes = [
  {
    type: 'Image',
    form: ({ plugin }) => (
      <Fragment>
        <Highlight
          {...defaultProps}
          code={`<img style="${generateStyle(plugin)}" href="BASE64URL" alt="${
            plugin.options.alt
          }" />`}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Fragment>
    )
  },
  {
    type: 'Text',
    form: ({ plugin }) => (
      <Fragment>
        <Highlight
          {...defaultProps}
          code={`<p style="${generateStyle(plugin)}">
    ${plugin.options.value}
</p>`}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Fragment>
    )
  },
  {
    type: 'Link',
    form: ({ plugin }) => (
      <Fragment>
        <Highlight
          {...defaultProps}
          code={`<a href="${plugin.options.href}">
    ${plugin.options.value}
</a>`}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Fragment>
    )
  },
  {
    type: '_',
    form: ({ row }) => (
      <Fragment>
        <Highlight
          {...defaultProps}
          code={`<table width="100%">
    <tr>
        ${row.options.columns.map(
          () => `<td style="${generateStyle(row)}"></td>\n\t`
        )}
    </tr>
</table>
          `}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </Fragment>
    )
  }
];

function generateStyle(row) {
  let style = '';
  Object.keys(row.options.childStyle).forEach(obj => {
    if (row.options.childStyle[obj])
      style += `${obj.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
        row.options.childStyle[obj]
      }; `;
  });
  return style;
}

const Console = ({ rows, plugins, id, onUpdate, classes }) => (
  <div className={css.contacts}>
    <p style={{ textAlign: 'center' }}>Code rendered</p>
    {id && (
      <div>
        {plugins.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Plugin
                key={id}
                plugin={elem}
                onUpdate={onUpdate}
                classes={classes}
              />
            );
          }
          return '';
        })}
        {rows.map(elem => {
          if (elem.options.uid === id) {
            const Plugin = formTypes.find(el => el.type === elem.type).form;
            return (
              <Plugin
                key={id}
                row={elem}
                onUpdate={onUpdate}
                classes={classes}
              />
            );
          }
          return '';
        })}
      </div>
    )}
  </div>
);

export default withStyles(styles)(Console);
