function generateHeader() {
  return (
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">' +
    '<html xmlns="http://www.w3.org/1999/xhtml">' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' +
    '<title>email</title>' +
    '<style type="text/css"></style>' +
    '</head>'
  );
}

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
  let body = `<body style="margin:0; padding:0;"><div style="width:100% !important; max-width: 624px; 
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

  body += '</div></body></html>';
  return body;
}

function emailGenerator(container) {
  let html = '';
  html += generateHeader();
  html += generateBody(container);
  return html;
}

module.exports = {
  emailGenerator
};
