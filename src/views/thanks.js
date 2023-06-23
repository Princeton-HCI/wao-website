import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './thanks.css'

const Thanks = (props) => {
  return (
    <div className="thanks-container">
      <Helmet>
        <title>thanks - WAO - The Workers' Algorithm Observatory</title>
        <meta
          name="description"
          content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
        />
        <meta
          property="og:title"
          content="thanks - WAO - The Workers' Algorithm Observatory"
        />
        <meta
          property="og:description"
          content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
        />
      </Helmet>
      <div className="thanks-container1">
        <img
          alt="image"
          src="/logos/wao-official-logo.svg"
          className="thanks-image"
        />
        <p className="thanks-caption">
          <span>
            The Workers&apos; Algorithm
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>Observatory</span>
        </p>
      </div>
      <h1 className="thanks-text3">
        <span>Thanks for submitting your form.</span>
        <br></br>
        <span>We&apos;ll be in touch soon!!</span>
        <br></br>
      </h1>
      <Link to="/" className="thanks-navlink button">
        Go Home
      </Link>
    </div>
  )
}

export default Thanks
