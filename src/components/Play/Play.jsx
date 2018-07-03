import React from 'react';
import styles from './play.css';
import PropTypes from 'prop-types';
import ball from './../../images/beach-ball.png';
export default function Play(props){
  return(
    <div className={styles.playWrapper}>
      <button onClick={props.onPlay} className={styles.playButton}>
        <img src={ball}/>
      </button>
    </div>

  );
}

Play.propTypes = {
  onPlay: PropTypes.func.isRequired
};
