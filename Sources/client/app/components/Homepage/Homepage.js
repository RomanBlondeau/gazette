// @flow
import React, { Component } from 'react';
import styles from './Homepage.scss';
import TopNavbar from "../Navbars/TopNavbar/TopNavbar";
import SideNavbar from "../Navbars/SideNavbar/SideNavbar";

type Props = {};

export default class Homepage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <TopNavbar/>
        <SideNavbar/>
      </div>
      );
  }
}
