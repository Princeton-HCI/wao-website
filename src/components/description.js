import React from 'react'

import PropTypes from 'prop-types'

import './description.css'

const Description = (props) => {
  return (
    <div className="description-container">
      <div className="description-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          loading="lazy"
          className="description-image"
        />
      </div>
      <span className="description-text Content">{props.text}</span>
    </div>
  )
}

Description.defaultProps = {
  image_alt: 'image',
  text: 'WAO helps workers and allies investigate black-box algorithmic systems',
  image_src: '/199-gigbox-031.svg',
}

Description.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default Description
