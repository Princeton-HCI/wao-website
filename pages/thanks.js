import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Thanks = (props) => {
  return (
    <>
      <div className="thanks-container">
        <Head>
          <title>Thanks - WAO - The Workers' Algorithm Observatory</title>
          <meta
            name="description"
            content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
          />
          <meta
            property="og:title"
            content="Thanks - WAO - The Workers' Algorithm Observatory"
          />
          <meta
            property="og:description"
            content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
          />
          <meta name="robots" content="noindex" />
        </Head>
        <div className="thanks-container1">
          <img alt="image" src="/logos/logo_wao.svg" className="thanks-image" />
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
        <Link href="/">
          <a className="thanks-link button">Go Home</a>
        </Link>
      </div>
      <style jsx>
        {`
          .thanks-container {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-new-1);
          }
          .thanks-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .thanks-image {
            width: 47px;
            height: 48px;
            object-fit: fill;
          }
          .thanks-caption {
            color: var(--dl-color-new-5);
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
          }
          .thanks-text3 {
            text-align: center;
          }
          .thanks-link {
            color: var(--dl-color-new-1);
            width: 100%;
            font-size: 1.1rem;
            max-width: var(--dl-size-size-xxlarge);
            align-self: center;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            transition: 0.3s;
            margin-left: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
            background-color: var(--dl-color-new-5);
          }
          .thanks-link:hover {
            color: var(--dl-color-new-1);
            background-color: var(--dl-color-new-4);
          }
          @media (max-width: 991px) {
            .thanks-container1 {
              gap: var(--dl-space-space-twounits);
            }
            .thanks-caption {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .thanks-container1 {
              align-self: flex-start;
            }
            .thanks-caption {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .thanks-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Thanks
