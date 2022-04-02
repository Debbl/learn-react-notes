import React, { PureComponent } from 'react';
import styles from './style.module.css';

export default class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={styles.title}>Profile</h2>
      </div>
    );
  }
}
