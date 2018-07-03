import React from 'react';
import styles from './clean.css';
import clean from './../../images/toilet.png';

export default function Clean(){
  return(
      <button className={styles.cleanWrapper}>
        <img src={clean} />

      </button>

  )
}
