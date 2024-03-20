import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <a href="#tools" className="navigation-links-link">
          {props.text1}
        </a>
        <a href="#about" className="navigation-links-link1">
          {props.text4}
        </a>
        <a href="#team" className="navigation-links-link2">
          {props.text2}
        </a>
        <a href="#contact" className="navigation-links-link3">
          {props.text3}
        </a>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navigation-links-link {
            text-decoration: none;
          }
          .navigation-links-link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link2 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navigation-links-link3 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }

          .navigation-links-root-class-name8 {
            align-self: center;
          }
          @media (max-width: 767px) {
            .navigation-links-nav {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: var(--dl-size-size-small);
              padding: var(--dl-space-space-sixunits);
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-twounits);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-halfunit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-halfunit);
              justify-content: center;
              background-color: #ffdfa2;
            }
            .navigation-links-link {
              color: var(--dl-color-gray-black);
              margin-bottom: t;
            }
            .navigation-links-link1 {
              color: var(--dl-color-gray-black);
              margin-left: 0;
            }
            .navigation-links-link2 {
              color: var(--dl-color-gray-black);
              margin-left: 0;
            }
            .navigation-links-link3 {
              color: var(--dl-color-gray-black);
              margin-left: 0;
            }
            .navigation-links-root-class-name8 {
              width: 100%;
              align-self: center;
              background-color: var(--dl-color-yellow-2);
            }
          }
          @media (max-width: 479px) {
            .navigation-links-nav {
              gap: var(--dl-space-space-unit);
              width: 100%;
              padding: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-halfunit);
              justify-content: center;
            }
            .navigation-links-link {
              margin-right: var(--dl-space-space-halfunit);
            }
            .navigation-links-link2 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .navigation-links-link3 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .navigation-links-root-class-name8 {
              flex: 1;
              width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </>
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
