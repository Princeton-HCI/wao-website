import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#tools" className="navigation-links-link">
        {props.text1}
      </a>
      <a href="#team" className="navigation-links-link1">
        {props.text2}
      </a>
      <a href="#about" className="navigation-links-link2">
        {props.text4}
      </a>
      <a href="#contact" className="navigation-links-link3">
        {props.text3}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text3: 'Contact',
  text2: 'Team',
  text1: 'Tools',
  text4: 'About',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
