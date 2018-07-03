import React from 'react';
import styles from './play.css';
import ball from './../../images/beach-ball.png';
export default function Play(props){
  return(
      <div className={styles.playWrapper}>
        <button onClick={props.onPlay} className={styles.playButton}>
          <img src={ball}/>
        </button>
      </div>

  )
}
