import React, { Component } from 'react';

import Button from '../Button/Button'
import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.renderSMIcon = this.renderSMIcon.bind(this)
  }

  renderSMIcon({ href, image }) {
    return (
      <a href={href}
        className="footer-icon-link"
        target="_blank"
        key={href}>
        <img className="footer-icon"
          src={image}
          alt={href} />
      </a>
    )
  }

  render() {
    const icons = [
      { image: iconTwitter, href: 'https://twitter.com/CoStudio_io' },
      { image: iconFacebook, href: 'https://facebook.com/CoStudio.io' }
    ]

    return(
      <footer className="footer-container">
        <div className="footer-links">
          <div className="footer-left">
            Footer Left
          </div>

          <div className="footer-right">
            Footer Right
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
