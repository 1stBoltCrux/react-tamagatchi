import React from 'react';
import styles from './sleep.css';
import lamp from './../../images/lamp.png';
export default function Sleep(props){
  return(
      <button onClick={props.onRest} className={styles.sleepWrapper}>
        <img src={lamp}/>
      </button>

  )
}
