import React from 'react';
import styles from './nav.css';
import Clean from './../Clean/Clean';
import Feed from './../Feed/Feed';
import Play from './../Play/Play';
import Sleep from './../Sleep/Sleep';

export default function Nav(props){
  return(
      <div className={styles.navWrapper}>
        <Clean/>
        <Feed onFeed={props.onFeed}/>
        <Play/>
        <Sleep/>
      </div>

  )
}
