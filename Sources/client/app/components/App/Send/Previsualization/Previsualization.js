import React from 'react';

const pluginType = [
  {
    type: 'Text',
    func: ({ value, childStyle }) => {
      let style = '';
      Object.keys(childStyle).forEach(obj => {
        if (childStyle[obj])
          style += `${obj.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
            childStyle[obj]
          }; `;
      });
      value = value.replace(/\n/g, '<br />');
      return `<p style="${style}">${value}</p>`;
    }
  },
  {
    type: 'Link',
    func: ({ value, href }) => `<a href="${href}">${value}</a>`
  },
  {
    type: 'Image',
    func: ({ alt, src, childStyle }) => {
      let style = '';
      Object.keys(childStyle).forEach(obj => {
        if (childStyle[obj])
          style += `${obj.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
            childStyle[obj]
          }; `;
      });
      return `<img src="${src}" alt="${alt}" style="${style}" />`;
    }
  }
];

function generateBody(container) {
  let body = `<table style="margin:0; padding:0;"><div style="width:100% !important; max-width: 624px; 
  background: #fff; margin: 0 auto; padding: 0; text-align: center;">`;

  container.rows.forEach(row => {
    body += `<table width="100%"><tr>`;
    row.options.columns.forEach(pluginId => {
      let style = '';
      Object.keys(row.options.childStyle).forEach(obj => {
        if (row.options.childStyle[obj])
          style += `${obj.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`)}: ${
            row.options.childStyle[obj]
          }; `;
      });
      body += `<td style="${style}">`;
      const plugin = container.plugins.find(elem => elem.options.uid === pluginId);
      if (plugin !== undefined)
        body += pluginType.find(({ type }) => type === plugin.type).func(plugin.options);
      body += `</td>`;
    });
    body += `</tr></table>`;
  });

  body += '</div></table>';
  return body;
}

const Previsualization = ({ container }) => {
  let html = '';
  html += generateBody(container);

  return <div style={{ width: '100%', backgroundColor: '#fff', borderRadius: '5px', color: 'black' }} dangerouslySetInnerHTML={{__html: html}} />;
}

export default Previsualization;
