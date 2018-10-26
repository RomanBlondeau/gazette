// @flow
import React, { Component } from 'react';
import styles from './TopNavbar.scss';

type Props = {};

export default class TopNavbar extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <ul className={styles.nav}>
          <li>Home</li>
          <li>Profile</li>
          <li className="search">
            <input type="text" className="search-input" placeholder="Search" />
          </li>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}
