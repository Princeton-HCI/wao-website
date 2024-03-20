import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - WAO - The Workers' Algorithm Observatory</title>
          <meta
            name="description"
            content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
          />
          <meta
            property="og:title"
            content="Page - WAO - The Workers' Algorithm Observatory"
          />
          <meta
            property="og:description"
            content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
          />
          <meta name="robots" content="noindex" />
        </Head>
        <div className="page-container1">
          <img alt="image" src="/logos/logo_wao.svg" className="page-image" />
          <p className="page-caption">
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
        <h1 className="page-text3">
          <span className="page-text4">404</span>
          <br className="page-text5"></br>
          <br></br>
          <span>
            Oops! Looks like you&apos;re exploring uncharted territory.
          </span>
          <br></br>
        </h1>
        <Link href="/">
          <a className="page-link button">Go Home</a>
        </Link>
      </div>
      <style jsx>
        {`
          .page-container {
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
          .page-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .page-image {
            width: 47px;
            height: 48px;
            object-fit: fill;
          }
          .page-caption {
            color: var(--dl-color-new-5);
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
          }
          .page-text3 {
            text-align: center;
          }
          .page-text4 {
            font-size: 64px;
          }
          .page-text5 {
            font-size: 64px;
          }
          .page-link {
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
          .page-link:hover {
            color: var(--dl-color-new-1);
            background-color: var(--dl-color-new-4);
          }
          @media (max-width: 991px) {
            .page-container1 {
              gap: var(--dl-space-space-twounits);
            }
            .page-caption {
              color: var(--dl-color-gray-black);
            }
          }
          @media (max-width: 767px) {
            .page-container1 {
              align-self: flex-start;
            }
            .page-caption {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .page-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
