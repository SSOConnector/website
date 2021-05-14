import React from 'react';
import './index.scss';

class Idp extends React.Component {
  render() {
    return (
      <div className="idp-box">
        <div className="idp-box-content">
          <img src={this.props.img} className="idp-box-img" alt={this.props.names} />
          <div className="idp-box-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default Idp;
