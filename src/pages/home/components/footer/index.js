import React from 'react';
import './index.scss';
import NavMenu from '../header/navMenu';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.withLink = this.props.withoutLink ? false : true;
  }
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-header">SSOConnector</div>
            <div className="footer-menu">
              {!this.withLink &&  <NavMenu name="About" reference="about" />}
              {!this.withLink &&  <NavMenu name="Features" reference="features" />}
              {!this.withLink &&  <NavMenu name="Docs" linkTo="/docs" />}
              {!this.withLink &&  <NavMenu name="Contact" reference="contact" />}

              {this.withLink &&  <NavMenu name="About" linkTo="/" />}
              {this.withLink &&  <NavMenu name="Features" linkTo="/" />}
              {this.withLink &&  <NavMenu name="Docs" linkTo="/docs" />}
              {this.withLink &&  <NavMenu name="Contact" linkTo="/" />}
            </div>
          </div>
          {!this.withLink && <a href="https://www.freepik.com/vectors/people" className="freepik-footer">People vector created by stories - www.freepik.com</a>}
        </div>
      </div>
    );
  }
}

export default Footer;
