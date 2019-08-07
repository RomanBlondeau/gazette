import React from 'react';
import withPlugin from '../Plugin/withPlugin';
import css from '../../Editor/Editor.scss';
import rowImg from './assets/row.png';
import picImg from './assets/picture.png';
import textImg from './assets/text.png';
import linkImg from './assets/link.png';

const whichPic = type => {
  switch (type) {
    case '_':
      return rowImg;
    case 'Image':
      return picImg;
    case 'Text':
      return textImg;
    case 'Link':
      return linkImg;
    default:
      return rowImg;
  }
};

const Tools = ({ type }) => (
  <div className={css.pluginWrapper}>
    <div className={css.imgWrapper}>
      <img src={whichPic(type)} alt="icon" className={css.pluginImage} />
    </div>
    <span className={css.plugin}>{type === '_' ? 'Row' : type}</span>
  </div>
);

const Plugin = () => (
  <div className={css.selector}>
    <p style={{ width: '100%', textAlign: 'center' }}>
      Drag and drop an element on the left view
    </p>
    {['_', 'Image', 'Text', 'Link'].map((el, index) => {
      const PluginTool = withPlugin(Tools, true);
      return (
        <div className={css.pluginContainer}>
          <PluginTool key={index} options={{ type: el }} />
        </div>
      );
    })}
  </div>
);

export default Plugin;
