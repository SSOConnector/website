import React from 'react';
import './index.scss';
import {
  Link
} from "react-router-dom";

class DocsMenu extends React.Component {
  render() {
    return (
      <Link to={this.props.link} class="docs-menu-item">
        <div class="doc-menu-item-heading">{this.props.name}</div>
        <div class="doc-menu-item-description">{this.props.description}</div>
      </Link>
    );
  }
}

export default DocsMenu;
