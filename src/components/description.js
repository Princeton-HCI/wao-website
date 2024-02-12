import React from 'react'

import PropTypes from 'prop-types'

import './description.css'

const Description = (props) => {
  return (
    <div className={`description-container ${props.rootClassName} `}>
      <div className="description-container1">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="lazy"
          className="description-image"
        />
      </div>
      <p className="description-caption">
        <span className="">{props.text1}</span>
        <br className=""></br>
        <span className="">{props.text2}</span>
      </p>
    </div>
  )
}

Description.defaultProps = {
  imageAlt: 'image',
  text: 'WAO helps workers and allies investigate black-box algorithmic systems',
  text2: ' ',
  imageSrc: '/199-gigbox-031.svg',
  text1: 'The WAO is a crowdsourced auditing collaboration. ',
  rootClassName: '',
}

Description.propTypes = {
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  imageSrc: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Description
