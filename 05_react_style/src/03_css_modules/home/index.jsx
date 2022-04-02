import React, { PureComponent } from 'react';
import styles from './style.module.css';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={styles.title}>Home</h2>
      </div>
    );
  }
}
