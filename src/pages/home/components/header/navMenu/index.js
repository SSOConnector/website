import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.executeScroll = this.executeScroll.bind(this);
    this.withLink = this.props.linkTo ? true : false;
  }

  executeScroll() {
    document.getElementById(this.props.reference).scrollIntoView();
  }

  render() {
    let return_element = <div className="nav-item" onClick={this.executeScroll}>{this.props.name}</div>;
    if(this.withLink) {
      return_element = <Link className="nav-item" to={this.props.linkTo}>{this.props.name}</Link>
    }
    return (
      return_element
    );
  }
}

export default NavMenu;
