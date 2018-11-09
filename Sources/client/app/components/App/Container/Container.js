import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5backend from 'react-dnd-html5-backend';

import View from './View/View';
import Plugin from './Plugin/Plugin';

import style from './Container.scss';

type Props = {};

export default class Container extends Component<Props> {
  props: Props;

  onUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <DragDropContextProvider backend={HTML5backend}>
        <div className={style.container}>
          <View />
          <Plugin name={'tozzi'} />
        </div>
      </DragDropContextProvider>
    );
  }
}
