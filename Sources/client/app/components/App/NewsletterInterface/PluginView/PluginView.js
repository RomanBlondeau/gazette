import React from 'react';
import withPlugin from '../Plugin/withPlugin';
import css from '../../Editor/Editor.scss';

const Tools = ({ type }) => <div>{type}</div>;

const Plugin = () => (
  <div className={css.selector}>
    {['Image', 'Text', 'Link', '_'].map((el, index) => {
      const PluginTool = withPlugin(Tools, true);
      return <PluginTool key={index} options={{ type: el }} />;
    })}
  </div>
);

export default Plugin;
