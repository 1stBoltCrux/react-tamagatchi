import React from 'react';
import styles from './actionbutton.css';

export default function ActionButton(props) {
  let currentAction = null;
    return (
      <div className={styles.actionButtonWrapper}>
        <button onClick={props.onClear} className={styles.actionButton}>
          Enter
        </button>
      </div>
    );

}
