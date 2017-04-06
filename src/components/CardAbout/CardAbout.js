import React, { Component } from 'react'

class CardAbout extends Component {
  render () {
    const { image, header, subheader, description } = this.props
    return (
      <div className="CardAbout-container">
        <img className="CardAbout-image"
          src={image}
          alt={header} />

        <div className="CardAbout-caption">
          <h3 className="CardAbout-header">
            {header}
          </h3>

          <h4 className="CardAbout-subheader">
            {subheader}
          </h4>

          <p className="CardAbout-description">
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default CardAbout
