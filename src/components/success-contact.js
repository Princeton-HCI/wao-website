import React from 'react'

import PropTypes from 'prop-types'

import './success-contact.css'

const SuccessContact = (props) => {
  return (
    <div className={`success-contact-container ${props.rootClassName} `}>
      <h1 className="success-contact-text">
        <span>{props.text1}</span>
        <br></br>
        <span>{props.text2}</span>
        <br></br>
      </h1>
    </div>
  )
}

SuccessContact.defaultProps = {
  text1: 'Thanks for submitting your form.',
  rootClassName: '',
  text2: "We'll be in touch soon!!",
}

SuccessContact.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default SuccessContact
