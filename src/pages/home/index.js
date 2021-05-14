import React, { useRef } from 'react';
import Header from './components/header';
import Intro from './components/intro';
import Feature from './components/feature';
import About from './components/product';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
  }

  componentDidMount = () => window.scrollTo(0, 0);

  render() {
    return (
      <div>
        <Header withoutLink={true} />
        <Intro />
        <About />
        <div className="feature-container" id="features">
          <h2 className="features-heading">Features</h2>
          <div className="features-block">
            <Feature
              heading="Secure"
              content="Build secure SSO application with the security of SSOConnector" />
            <Feature
              heading="Scalable"
              content="SSOConnector can easily scale to your need" />
            <Feature
              heading="SAML 2.0"
              content="We support SAML 2.0 protocol for SSO which is used and supported by most of the organizations and IDPs" />
          </div>
          <div className="features-block">
            <Feature
              heading="Customizable Error Pages"
              content="Build Customized error pages when login fails and give your customers the feel of your own interface" />
            <Feature
              heading="APIs"
              content="Easily integrate SSOConnector with APIs" />
            <Feature
              heading="Setup Documentation"
              content="Get step by step setup guide for all IDPs with troubleshooting steps" />
          </div>
        </div>
        <Contact />
        <Footer withoutLink={true}  />
      </div>
    );
  }
}

export default Home;
