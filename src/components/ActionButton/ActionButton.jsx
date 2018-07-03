import React from 'react';
import PropTypes from 'prop-types';
import styles from './actionbutton.css';

export default function ActionButton(props) {
  return (
    <div className={styles.actionButtonWrapper}>
      <button onClick={props.onClear} className={styles.actionButton}>
          Enter
      </button>
    </div>
  );
}

ActionButton.propTypes = {
  onClear: PropTypes.func.isRequired
};
