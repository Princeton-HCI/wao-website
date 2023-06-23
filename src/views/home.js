import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'
import Script from 'dangerous-html/react'

import NavigationLinks from '../components/navigation-links'
import Description from '../components/description'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>WAO - The Workers' Algorithm Observatory</title>
        <meta
          name="description"
          content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
        />
        <meta
          property="og:title"
          content="WAO - The Workers' Algorithm Observatory"
        />
        <meta
          property="og:description"
          content='Investigating black-box platform algorithms, such as those used by Uber and DoorDash, faces major challenges in accessing the data necessary for a meaningful audit. To solve this, we’re developing tools and support for workers and allies to crowdsource data and investigate the black-box algorithmic systems behind the platforms that determine pay, schedule, and more, in the platform economy and beyond. We launched the WAO in 2022. We are currently a nonprofit initiative with funding from the Mozilla Tech Fund 2023 "Auditing AI" cohort.'
        />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <div className="home-container1">
          <img
            alt="image"
            src="/logos/wao-official-logo.svg"
            loading="lazy"
            className="home-image"
          />
          <p className="home-caption">
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
        <NavigationLinks
          text1="Tools"
          text2="Team"
          text3="Contact"
          text4=" About"
          rootClassName="rootClassName8"
        ></NavigationLinks>
      </header>
      <section className="home-hero">
        <div className="home-stat">
          <div className="home-container2">
            <div className="home-container3">
              <h2 className="home-header1">
                Worker-led audits in the platform economy
              </h2>
              <form
                action="https://formspree.io/f/mnqyenkw"
                method="post"
                enctype="application/x-www-form-urlencoded"
                className="home-form"
              >
                <input
                  type="email"
                  name="EMAIL"
                  required
                  placeholder="Enter your email..."
                  className="home-textinput input"
                />
                <button
                  name="subscribe"
                  type="submit"
                  className="home-button button"
                >
                  <span>
                    <span>Subscribe</span>
                    <br></br>
                  </span>
                </button>
              </form>
              <div className="home-container4">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="home-textinput1 input"
                />
                <button className="home-button1 button">Get Updates</button>
              </div>
              <a href="#contact" className="home-link button">
                Contact Us
              </a>
            </div>
            <img
              alt="image"
              src="/woa-illustration-hero.svg"
              loading="lazy"
              className="home-image01"
            />
          </div>
        </div>
        <div className="home-second">
          <div data-aos="fade-up-left" className="home-content">
            <h2 className="home-header2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <button className="button button-style-2 home-register">
              <span>Register now</span>
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </button>
          </div>
          <img alt="image" src="/notes-2-1400w.png" className="image-notes" />
        </div>
      </section>
      <section className="home-features">
        <div className="home-stat1">
          <Description></Description>
          <Description
            text="We're crowdsourcing the data necessary for meaningful, scientific audits"
            image_src="/199-audit-031.svg"
          ></Description>
          <Description
            text="Our group is building tools and support for workers and allies"
            image_src="/199-toolbox-031.svg"
          ></Description>
        </div>
      </section>
      <section id="tools" className="home-tools">
        <div className="home-header3">
          <div data-aos="fade-right" className="home-heading">
            <h2 className="home-title">Tools</h2>
            <p className="home-caption1">
              <span>
                We&apos;re building tools to investigate black-box algorithmic
                systems
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </div>
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_eniBPFXbXV.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
        <div className="home-brands">
          <div className="home-row">
            <div className="home-item">
              <div className="home-details">
                <img
                  alt="image"
                  src="/woa-icon-gigbox.svg"
                  loading="lazy"
                  className="home-image03"
                />
                <h3 className="home-title1">
                  <span>The Shipt calculator</span>
                  <br></br>
                </h3>
                <p className="home-description">
                  <span className="home-text12">
                    Our first collaboration was a worker-led study
                  </span>
                  <span>
                    {' '}
                    on changes after the grocery delivery app Shipt moved from a
                    fully transparent pay structure to an algorithmic system.
                    Over one hundred workers crowdsourced and analyzed their
                    data app using
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://gigbox.media.mit.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link01"
                  >
                    Gigbox
                  </a>
                  <span>
                    {' '}
                    and a custom text bot. Together, we found that wages
                    decreased for a majority but increased for a minority,
                    suggesting that algorithmic management determines more than
                    just pay – it also affects worker agency and well-being,
                    too. Learn more in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.media.mit.edu/projects/the-shipt-calculator-crowdsourcing-gig-worker-pay-data-to-audit-algorithmic-management/overview/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link02"
                  >
                    this blog post
                  </a>
                  <span>
                     at the MIT Media Lab and watch
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.media.mit.edu/videos/hd-shipt-app-tracker-2023-02-22/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link03"
                  >
                    this short film
                  </a>
                  <span>
                    {' '}
                    we produced with workers and allies who made the
                    collaboration happen.
                  </span>
                  <br className="home-text17"></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="home-team">
        <div className="home-header4">
          <div data-aos="fade-right" className="home-heading1">
            <p className="home-caption2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-header5">
          <div data-aos="fade-right" className="home-heading2">
            <h2 className="home-title2">Team</h2>
            <p className="home-caption3">
              <span>
                We&apos;re a team of applied and academic researchers supporting
                workers and allies
              </span>
              <br></br>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </div>
        </div>
        <div className="home-brands1">
          <div className="home-brand brand">
            <img
              alt="image"
              src="/samantha_wao_490x490-200h.png"
              loading="lazy"
              className="home-image04"
            />
            <a
              href="https://www.samantha-dalal.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link04"
            >
              Samantha Dalal
            </a>
            <a
              href="https://www.colorado.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link05"
            >
              University of Colorado Boulder
            </a>
          </div>
          <div className="home-brand1 brand">
            <img
              alt="image"
              src="/danny_wao_490x490-200h.png"
              loading="lazy"
              className="home-image05"
            />
            <a
              href="https://www.linkedin.com/in/danielspitzberg/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link06"
            >
              Danny Spitzberg
            </a>
            <a
              href="https://www.turningbasinlabs.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link07"
            >
              Turning Basin Labs
            </a>
          </div>
          <div className="home-brand2 brand">
            <img
              alt="image"
              src="/dan_wao_490x490-200h.png"
              loading="lazy"
              className="home-image06"
            />
            <a
              href="https://media.mit.edu/people/dcalacci"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              Dan Calacci
            </a>
            <a
              href="https://www.media.mit.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              MIT Media Lab
            </a>
          </div>
          <div className="home-brand3 brand">
            <img
              alt="image"
              src="/andres_wao_490x490-200h.png"
              loading="lazy"
              className="home-image07"
            />
            <a
              href="https://www.andresmh.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link10"
            >
              Andrés Monroy-Hernández
            </a>
            <a
              href="https://www.princeton.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              Princeton University
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="home-about">
        <div className="home-header6">
          <div data-aos="fade-right" className="home-heading3">
            <h2 className="home-title3">About</h2>
          </div>
          <p className="home-caption4">
            <span>The WAO is a crowdsourced auditing collaboration. </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
        </div>
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_eniBPFXbXV.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="home-lottie-node1"
        ></Player>
        <div className="home-brands2">
          <div className="home-row1">
            <div className="home-item1">
              <div className="home-details1">
                <div className="home-header7">
                  <div data-aos="fade-right" className="home-heading4">
                    <p className="home-caption5">
                      <span>
                        Investigating black-box platform algorithms, such as
                        those used by Uber and DoorDash, faces major challenges
                        in accessing the data necessary for a meaningful audit.
                        To solve this, we’re developing tools and support for
                        workers and allies to crowdsource data and investigate
                        the black-box algorithmic systems behind the platforms
                        that determine pay, schedule, and more, in the platform
                        economy and beyond. 
                      </span>
                      <span>
                        We launched the WAO in 2022. We are currently a
                        nonprofit initiative with funding from the
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <a
                        href="https://foundation.mozilla.org/en/what-we-fund/awards/mozilla-technology-fund-mtf/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link12"
                      >
                        Mozilla Tech Fund 
                      </a>
                      <a
                        href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link13"
                      >
                        2023 &quot;Auditing AI&quot; cohort
                      </a>
                      <span>.</span>
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="home-contact">
        <div className="home-header8">
          <div data-aos="fade-right" className="home-heading5">
            <h2 className="home-title4">Contact</h2>
          </div>
          <p className="home-caption6">
            {' '}
            We&apos;re open to collaborations to auditing algorithms and AI in
            the platform economy 
          </p>
        </div>
        <div className="home-container5">
          <div>
            {/* style for form */}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n  @import url(\'https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap\');\n\n  #my-form {\n    font-family: \'Source Sans 3\', sans-serif;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n.input {\n  color: #000000;\n  cursor: auto;\n  padding: 0.5rem 1rem;\n  border-color: #000000;\n  border-width: 0px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n\n\ntextarea {\n  color: #000000;\n  cursor: auto;\n  padding: 0.5rem;\n  border-color: #000000;\n  border-width: 0px;\n  border-radius: 4px;\n  background-color: #ffffff;\n}\n\n\n\nbutton[type="submit"] {\n  gap: 16px;\n  color: #000000;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 1rem;\n  font-style: normal;\n  align-items: center;\n  font-weight: 600;\n  padding-top: 16px;\n  transition: 0.3s;\n  border-color: #000000;\n  border-width: 0px;\n  padding-left: 32px;\n  border-radius: 60px;\n  padding-right: 32px;\n  padding-bottom: 16px;\n  justify-content: center;\n  background-color: #ffffff;\n  color: #fbf4e6;\n  width: 100%;\n  font-size: 1.1rem;\n  box-shadow: 5px 5px 10px 0px #d4d4d4, 5px 5px 10px 0px #d4d4d4;\n  margin-left: 0px;\n  transition: 0.3s;\n  border-radius: 4px;\n  background-color: #332e24;\n  max-width: 600px;\n  text-align: center;\n}\nbutton[type="submit"]:hover {\n  color: #fbf4e6ff;\n  background-color: #605a4fff;\n  opacity: 0.5;\n}\n.checkbox-group {\n  display: flex;\n  align-items: "center";\n  gap: 1em;\n}\n\np#my-form-status {\n  color: #000000;\n  font-weight: 700;\n}\n\n#my-form-status[data-success="false"] {\n  color: #d04c4b !important;\n}\n#my-form-status[data-success="true"] {\n  color: #000000;\n  font-size: 1.3rem;\n}\n\n\n',
              }}
            />

            {/* modify this form HTML and place wherever you want your form */}
            <form
              id="my-form"
              action="https://formspree.io/f/mnqyenkw"
              method="POST"
            >
              <input
                required={true}
                type="text"
                placeholder="Name"
                name="name"
                className="input"
              />
              <input
                type="text"
                name="role"
                placeholder="Role and Affiliation"
                className="input"
              />
              <input
                required={true}
                type="text"
                name="email"
                placeholder="Email"
                className="input"
              />
              <textarea name="message" rows={3} placeholder="Message" />
              <div className="checkbox-group">
                <input type="checkbox" name="subscribe" />
                <label> Subscribe to our email list</label>
              </div>
              <button id="my-form-button" type="submit">
                <span>Submit</span>
              </button>
              <p id="my-form-status" />
            </form>
            {/* Place this script at the end of the body tag */}
            <Script>{`
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var submitButton = document.getElementById("my-form-button");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.dataset.success = true;
          submitButton.style.display = "none";
          status.innerHTML = "Thank you for submitting your form. We’ll be in touch soon!";                  
          form.reset()
        } else {
          response.json().then(data => {
            status.dataset.success = false;

            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
`}</Script>

            <style
              data-href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
              dangerouslySetInnerHTML={{
                __html:
                  "@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPA.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lujVj9_mf.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lujVj9_mf.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lujVj9_mf.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lujVj9_mf.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lujVj9_mf.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lujVj9_mf.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}",
              }}
            />
          </div>
        </div>
      </section>
      <section className="home-footer">
        <div className="home-background">
          <img
            alt="image"
            src="/circle-background.svg"
            loading="lazy"
            className="home-image08"
          />
          <img
            alt="image"
            src="/line-background.svg"
            className="home-image09"
          />
        </div>
        <div className="home-hero-content">
          <div className="home-caption7">
            <button className="home-register1 button-style-1 button">
              <img
                alt="image"
                src="/logos/wao-official-logo.svg"
                loading="lazy"
                className="home-image10"
              />
            </button>
          </div>
          <h1 className="home-text28">
            The Workers&apos; Algorithm Observatory.
          </h1>
        </div>
      </section>
      <div className="home-reveal">
        <Script>{`
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
`}</Script>
      </div>
      <div className="home-scrollbar">
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n#scrollbar::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n\n#scrollbar::-webkit-scrollbar\n{\n\theight: 12px;\n\tbackground-color: #F5F5F5;\n\tborder-radius: 10px;\n}\n\n#scrollbar::-webkit-scrollbar-thumb\n{\n\tborder-radius: 10px;\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: #555;\n}\n',
          }}
        />
      </div>
    </div>
  )
}

export default Home
