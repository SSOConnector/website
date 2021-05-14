import React from 'react';
import './index.scss';
import logo from './../../../../assets/logo.png'
import NavMenu from './navMenu'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.withLink = this.props.withoutLink ? false : true;
  }
  render() {
    return (
      <div className="header-properties">
        <div className="container">
          <div className="brand-name">
            <img src={logo} className="nav-logo" alt="logo" />
              SSOConnector
          </div>
          <div className="nav-menu">
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
      </div>
    );
  }
  // executeAboutScroll = () => this.props.aboutReference.current.scrollIntoView();
  // useMountEffect(executeAboutScroll);
}

export default Header;
