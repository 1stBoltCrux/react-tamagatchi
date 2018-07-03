import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './app.css';
import Nav from './Nav/Nav';
import ActionButton from './ActionButton/ActionButton';


import guy from './../images/guy.gif';
import poop from './../images/poop.gif';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sleep: 10,
      hunger: 10,
      cleanliness: 10,
      happiness: 10,
      feed: false,
      rest: false,
      play: false,
      clean: false
    }

    this.handleFeed = this.handleFeed.bind(this);
    this.handleClean = this.handleClean.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount(){
    this.timer = setInterval(() =>
      this.deprecator(),
        5000
    );
  }

  deprecator(){
    console.log(this.state);
    const newState = this.state;
    newState.sleep--;
    newState.hunger--;
    newState.cleanliness--;
    newState.happiness--;
    this.setState({
     sleep: newState.sleep,
     hunger: newState.hunger,
     cleanliness: newState.cleanliness,
     happiness: newState.happiness
   })
  }

  handleFeed(){
    this.setState({feed: true})
  }

  handleClean(){
    this.setState({clean: true})
  }

  handlePlay(){
    this.setState({play: true})
  }

  handleRest(){
    this.setState({rest: true})
  }

  handleClear() {
    if (this.state.feed === true) {
      this.setState({hunger: 10, feed: false});
    } else if (this.state.clean === true) {
      this.setState({cleanliness: 10, clean: false});
    } else if (this.state.rest === true) {
      this.setState({sleep: 10, rest: false});
    } else {
      this.setState({happiness: 10, play: false})
    }

    console.log(this.state.hunger);
  }
  render(){
    return (
      <div className={styles.appWrapper}>
          <div className={styles.display}>
            <Nav onFeed={this.handleFeed}
                  onRest={this.handleRest}
                  onClean={this.handleClean}
                  onPlay={this.handlePlay}/>
            <img src={guy}/>
            <div className={styles.poop}>
              {this.state.cleanliness < 8 ? <img  src={poop}/> : ''}
            </div>
          </div>
          <ActionButton
            onClear={this.handleClear}/>
      </div>
    );
  }

  }
