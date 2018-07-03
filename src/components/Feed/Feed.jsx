import React from 'react';
import PropTypes from 'prop-types';
import styles from './feed.css';
import ramen from './../../images/ramen.png';
export default function Feed(props){
  return(
    <button onClick={props.onFeed} className={styles.feedWrapper}>
      <img src={ramen} />
    </button>
  );
}

Feed.propTypes = {
  onFeed: PropTypes.func.isRequired
};
