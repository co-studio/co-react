import React, { Component } from 'react'

class Thumbnail extends Component {
  render() {
    const { image, href, title, description } = this.props
    const disabled = (href) ? '' : 'Thumbnail-disabled'
    return (
      <div className="Thumbnail-container">
        <a className="Thumbnail-image-container"
          href={href}
          target="_blank">
          <img className="Thumbnail-image"
            src={image}
            alt={title} />
        </a>

        {title || description &&

          <div className="Thumbnail-caption">
            <a className={`Thumbnail-link ${disabled}`}
              href={href}
              target="_blank">
              <h3 className="Thumbnail-title">
                {title}
              </h3>
            </a>

            <p className="Thumbnail-description">
              {description}
            </p>
          </div>

        }
      </div>
    )
  }
}

export default Thumbnail
