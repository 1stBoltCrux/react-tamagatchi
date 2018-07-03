import React from 'react';
import PropTypes from 'prop-types';
import styles from './nav.css';
import Clean from './../Clean/Clean';
import Feed from './../Feed/Feed';
import Play from './../Play/Play';
import Sleep from './../Sleep/Sleep';

export default function Nav(props){
  return(
    <div className={styles.navWrapper}>
      <Clean onClean={props.onClean}/>
      <Feed onFeed={props.onFeed}/>
      <Play onPlay={props.onPlay}/>
      <Sleep onRest={props.onRest}/>
    </div>
  );
}
Nav.propTypes = {
  onRest: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
  onFeed: PropTypes.func.isRequired,
  onClean: PropTypes.func.isRequired
};
