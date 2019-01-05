import React, { Component } from 'react';
import '../styles/Top.css';

class Top extends Component {
  render() {
    return (
      <div className="Top">
        <div className="Top HeroText">
            Hello World. My name is <span className="Top MyName">Abram Himmer</span>.<br/>
            I am a Software Engineer.
        </div>
      </div>
    );
  }
}

export default Top;
