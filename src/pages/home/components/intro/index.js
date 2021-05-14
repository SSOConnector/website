import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import frontPageVis from './../../../../assets/front-page-vis.jpg'

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.executeContactScroll = this.executeContactScroll.bind(this);
  }

  executeContactScroll() {
    document.getElementById('contact').scrollIntoView();
  }
  render() {
    return (
      <div>
        <div className="intro-area">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                Single Sign On Integration Made Easy
              </div>
              <div className="intro-text-description">
                Build 100% SSO flows from Setup to Authentication. <br />
                Focus on building application and leave the complexity of SSO to us.
              </div>
              <div className="nav-item"><button className="intro-get-in-touch-btn" onClick={this.executeContactScroll}>
                Get in touch
              </button></div>
            </div>
          </div>
        </div>
      <div className="container intro-second-part">
          <div className="intro-second-part-text">
              <div className="intro-second-line-first">With many IDPs out there, it's difficult to get SSO Setup right.</div>
              <div className="intro-second-line-second">If not done correctly, you could expose your application and customer data to a great risk.</div>
          </div>
          <img src={frontPageVis} className="intro-vis" alt="intro-vis" />
      </div>
    </div>
    );
  }
}

export default Intro;
