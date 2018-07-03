import React from 'react';
import styles from './app.css';
import Nav from './Nav/Nav';
import ActionButton from './ActionButton/ActionButton';
import dead from './../images/dead.gif';
import guy from './../images/guy.gif';
import poop from './../images/poop.gif';
import bored from './../images/bored.png';
import sleepy from './../images/sleepy.png';
import hungry from './../images/hungry.png';

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
      clean: false,
      poopArray: [],
      alive: true
    };

    this.handleFeed = this.handleFeed.bind(this);
    this.handleClean = this.handleClean.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleRest = this.handleRest.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handlePoop = this.handlePoop.bind(this);
  }

  componentDidMount(){
    this.deathTimer = setInterval(() =>
      this.handleDeath(), 5000);
    this.poopTimer = setInterval(() =>
      this.handlePoop(), 5000);
    this.timer = setInterval(() =>
      this.deprecator(),
    5000
    );
  }
  componentDidUpdate() {
    this.clearTimers();
  }
  clearTimers() {
    if(this.state.alive === false) {
      clearInterval(this.deathTimer);
      clearInterval(this.poopTimer);
      clearInterval(this.timer);
    }
  }

  deprecator(){
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
    });
  }

  handleFeed(){
    this.setState({feed: true});
  }

  handleClean(){
    this.setState({clean: true});
  }

  handlePlay(){
    this.setState({play: true});
  }

  handleRest(){
    this.setState({rest: true});
  }

  handleClear() {
    if (this.state.feed === true) {
      this.setState({hunger: 10, feed: false});
    } else if (this.state.clean === true) {
      this.setState({cleanliness: 10, clean: false, poopArray: []});
    } else if (this.state.rest === true) {
      this.setState({sleep: 10, rest: false});
    } else {
      this.setState({happiness: 10, play: false});
    }
  }
  handlePoop() {
    if (this.state.cleanliness === 8 || this.state.cleanliness === 6 || this.state.cleanliness === 4) {
      let newPoopArray = this.state.poopArray.slice();
      newPoopArray.push(poop);
      this.setState({poopArray: newPoopArray});
    }
  }

  handleDeath() {
    if (this.state.cleanliness < 0 || this.state.happiness < 0 || this.state.sleep < 0 || this.state.hunger < 0) {
      this.setState({alive: false, poopArray: []});
    }
  }
  render(){
    return (
      <div className={styles.appWrapper}>
        <div className={styles.display}>
          <Nav onFeed={this.handleFeed}
            onRest={this.handleRest}
            onClean={this.handleClean}
            onPlay={this.handlePlay}/>
          {this.state.alive === false ? <img src={dead}/> : <img src={guy}/>}
          <div className={styles.poop}>
            {this.state.poopArray.map((newPoop, index) =>
              <img src={newPoop} key={index}/>
            )}
          </div>
          <div className={styles.bored}>
            {this.state.happiness <= 4 && this.state.alive === true ? <img src={bored}/> : ''}
          </div>
          <div className={styles.hungry}>
            {this.state.hunger <= 4 && this.state.alive === true ? <img src={hungry}/> : ''}
          </div>
          <div className={styles.sleepy}>
            {this.state.sleep <= 4 && this.state.alive === true ? <img src={sleepy}/> : ''}
          </div>
        </div>
        <ActionButton
          onClear={this.handleClear}/>
      </div>
    );
  }

}
