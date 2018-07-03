import React from 'react';
import styles from './sleep.css';
import lamp from './../../images/lamp.png';
export default function Sleep(){
  return(
      <button className={styles.sleepWrapper}>
        <img src={lamp}/>
      </button>

  )
}
