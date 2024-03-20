import React from 'react'

import PropTypes from 'prop-types'

const Description = (props) => {
  return (
    <>
      <div className={`description-container ${props.rootClassName} `}>
        <div className="description-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            loading="lazy"
            className="description-image"
          />
        </div>
        <p className="description-caption">
          <span>{props.text1}</span>
          <br></br>
          <span>{props.text2}</span>
        </p>
      </div>
      <style jsx>
        {`
          .description-container {
            gap: var(--dl-space-space-twounits);
            width: 33%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            max-width: 1200px;
            align-self: flex-end;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: flex-start;
            background-color: rgba(196, 190, 176, 0.25);
          }
          .description-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: Large;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            background-color: var(--dl-color-new-1);
          }
          .description-image {
            width: auto;
            height: var(--dl-size-size-large);
            object-fit: cover;
          }
          .description-caption {
            color: var(--dl-color-new-5);
            font-size: 18px;
            line-height: 27px;
          }
          .description-root-class-name {
            align-self: stretch;
          }

          @media (max-width: 991px) {
            .description-container {
              width: 100%;
              height: auto;
              padding: 0px;
              max-width: auto;
              align-items: center;
              margin-left: 0px;
              flex-direction: row;
              justify-content: flex-start;
              background-color: transparent;
            }
            .description-container1 {
              width: auto;
              background-color: transparent;
            }
            .description-image {
              width: 60px;
              height: auto;
            }
            .description-caption {
              max-width: 350px;
            }
          }
          @media (max-width: 767px) {
            .description-container {
              width: 100%;
              height: auto;
              padding: 0px;
            }
            .description-caption {
              width: auto;
              font-size: 16px;
              max-width: 350px;
              line-height: 24px;
            }
            .description-root-class-name1 {
              max-width: auto;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .description-image {
              width: 70px;
            }
            .description-caption {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Description.defaultProps = {
  image_alt: 'image',
  text: 'WAO helps workers and allies investigate black-box algorithmic systems',
  text2: ' ',
  image_src: '/illustration_gigbox.svg',
  text1: 'The WAO is a crowdsourced auditing collaboration. ',
  rootClassName: '',
}

Description.propTypes = {
  image_alt: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  image_src: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Description
