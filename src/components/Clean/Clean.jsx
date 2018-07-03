import React from 'react';
import PropTypes from 'prop-types';
import styles from './clean.css';
import clean from './../../images/toilet.png';

export default function Clean(props){
  return(
    <button onClick={props.onClean} className={styles.cleanWrapper}>
      <img src={clean} />
    </button>

  );
}

Clean.propTypes = {
  onClean: PropTypes.func.isRequired
};
