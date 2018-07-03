import React from 'react';
import styles from './feed.css';
import ramen from './../../images/ramen.png'
export default function Feed(props){
  return(
      <button onClick={props.onFeed} className={styles.feedWrapper}>
        <img src={ramen} />
      </button>

  )
}
