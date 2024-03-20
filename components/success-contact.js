import React from 'react'

import PropTypes from 'prop-types'

const SuccessContact = (props) => {
  return (
    <>
      <div className={`success-contact-container ${props.rootClassName} `}>
        <h1 className="success-contact-text">
          <span>{props.text1}</span>
          <br></br>
          <span>{props.text2}</span>
          <br></br>
        </h1>
      </div>
      <style jsx>
        {`
          .success-contact-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .success-contact-text {
            align-self: center;
            text-align: center;
          }
        `}
      </style>
    </>
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
