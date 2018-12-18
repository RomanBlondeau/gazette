import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5backend from 'react-dnd-html5-backend';

import View from '../../../containers/Container/PluginViewContainer';
import Plugin from './PluginView/PluginView';
import PluginProps from '../../../containers/Container/PluginPropsContainer';

import style from './NewsletterInterface.scss';
import Console from '../../../containers/Container/ConsoleContainer';

const NewsletterInterface = () => (
  <DragDropContextProvider backend={HTML5backend}>
    <View />
    <div className={style.containerRow}>
      <Plugin />
      <PluginProps />
      <Console />
    </div>
  </DragDropContextProvider>
);

export default NewsletterInterface;
