import React from 'react';
import './index.scss';

class Feature extends React.Component {
  render() {
    return (
      <div className="feature-item">
        <div className="feature-heading">
          {this.props.heading}
        </div>
        <div className="feature-content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Feature;
