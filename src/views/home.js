import React from 'react'

import { Player } from '@lottiefiles/react-lottie-player'
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

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
          content="The Workers’ Algorithm Observatory helps workers and allies investigate black-box algorithmic systems. We’re building tools to crowdsource the data necessary for meaningful scientific audits."
        />
        <meta
          property="og:title"
          content="WAO - The Workers' Algorithm Observatory"
        />
        <meta
          property="og:description"
          content="The Workers’ Algorithm Observatory helps workers and allies investigate black-box algorithmic systems. We’re building tools to crowdsource the data necessary for meaningful scientific audits."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/06894b01-ea7b-4073-94a2-d66e5719a755/6cd1a78d-e016-4e24-874f-140ea9ef182b?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <div className="home-container01">
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
      <section id="hero" className="home-hero">
        <div className="home-container02">
          <div className="home-container03">
            <h2 className="home-header1">
              Worker-led audits in the platform economy
            </h2>
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
        <div className="home-stat">
          <Description
            text1="WAO helps workers and allies investigate black-box algorithmic systems"
            rootClassName="description-root-class-name1"
          ></Description>
          <Description
            text="We're crowdsourcing the data necessary for meaningful, scientific audits"
            text1="We're crowdsourcing the data necessary for meaningful, scientific audits"
            imageSrc="/199-audit-031.svg"
          ></Description>
          <Description
            text="Our group is building tools and support for workers and allies"
            text1="Our group is building tools and support for workers and allies"
            imageSrc="/199-toolbox-031.svg"
            rootClassName="description-root-class-name"
          ></Description>
        </div>
      </section>
      <section id="tools" className="home-tools">
        <div className="home-header2">
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
        <div className="home-fair-fare">
          <img
            alt="image"
            src="/logos/fairfare-wao-200w.png"
            loading="lazy"
            className="home-image02"
          />
          <h3 className="home-title1">
            <span>FairFare</span>
            <br></br>
          </h3>
          <p className="home-description">
            <span className="home-text08">
              FairFare helps drivers, organizers, and policy-makers understand
              the ride hail industry
            </span>
            <span> </span>
            <span>
              by crowdsourcing fare data from drivers. Drivers securely and
              anonymously link their job data to analyze average fare breakdowns
              and changes over time, in several states nationwide. This pilot
              study runs through Summer 2024, is based at Princeton University,
              and is funded by the Mozilla Foundation. Read about our launch in
              this
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://foundation.mozilla.org/en/blog/giving-gig-workers-the-transparency-they-deserve/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link01"
            >
              blog post
            </a>
            <span>
              , learn about our early findings in
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://www.youtube.com/watch?v=1zGlYNS2qGk"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link02"
            >
              this 10min video
            </a>
            <span>
              {' '}
              with drivers in Colorado, and sign up for the study at  
            </span>
            <a
              href="https://getfairfare.org/driver/landing"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link03"
            >
              getfairfare.org
            </a>
            <br className="home-text13"></br>
          </p>
        </div>
        <div className="home-shipt">
          <div className="home-row">
            <div className="home-item">
              <div className="home-details">
                <img
                  alt="image"
                  src="/woa-icon-gigbox.svg"
                  loading="lazy"
                  className="home-image03"
                />
                <h3 className="home-title2">
                  <span>The Shipt calculator</span>
                  <br></br>
                </h3>
                <p className="home-description1">
                  <span className="home-text16">
                    The Shipt Calculator was a worker-led study of a black box
                    algorithm
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    used by the delivery company Shipt. Willy Solis, a member of
                    the
                  </span>
                  <a
                    href="https://twitter.com/GigWC"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link04"
                  >
                    {' '}
                    Gig Workers Collective
                  </a>
                  <span>
                    {' '}
                    who led the study, collaborated with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="http://coworker.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link05"
                  >
                    Cowo
                  </a>
                  <span className="home-text20">rker.org</span>
                  <span>
                    {' '}
                    and our team to crowdsource and analyze data shared by over
                    one hundred workers using a custom texting bot. We found
                    that wages decreased for a majority but increased for a
                    minority, suggesting that the algorithm determines more than
                    just pay – it affects worker agency and well-being, too.
                    Learn more about this in a
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
                    className="home-link06"
                  >
                    blog post
                  </a>
                  <span>
                    {' '}
                    and
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
                    className="home-link07"
                  >
                    11-minute film
                  </a>
                  <span>
                    {' '}
                    produced in collaboration with the MIT Media Lab and the
                    FAccT conference.
                  </span>
                  <br className="home-text24"></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="home-about">
        <div className="home-header3">
          <div data-aos="fade-right" className="home-heading1">
            <h2 className="home-title3">About</h2>
          </div>
          <p className="home-caption2">
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
        <div className="home-brands">
          <div className="home-row1">
            <div className="home-item1">
              <div className="home-details1">
                <div className="home-header4">
                  <div data-aos="fade-right" className="home-heading2">
                    <p className="home-caption3">
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
                        className="home-link08"
                      >
                        Mozilla Tech Fund 
                      </a>
                      <a
                        href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link09"
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
      <section id="team" className="home-team">
        <div className="home-header5">
          <div data-aos="fade-right" className="home-heading3">
            <p className="home-caption4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className="home-header6">
          <div data-aos="fade-right" className="home-heading4">
            <h2 className="home-title4">Team</h2>
            <p className="home-caption5">
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
              className="home-link10"
            >
              Samantha Dalal
            </a>
            <a
              href="https://www.colorado.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
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
              className="home-link12"
            >
              Danny Spitzberg
            </a>
            <a
              href="https://www.turningbasinlabs.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link13"
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
              className="home-link14"
            >
              Dan Calacci
            </a>
            <a
              href="https://www.media.mit.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link15"
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
              className="home-link16"
            >
              Andrés Monroy-Hernández
            </a>
            <a
              href="https://www.princeton.edu/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link17"
            >
              Princeton University
            </a>
          </div>
        </div>
      </section>
      <section id="contact" className="home-contact">
        <div className="home-header7">
          <div data-aos="fade-right" className="home-heading5">
            <h2 className="home-title5">Contact</h2>
          </div>
          <p className="home-caption6">
            We help workers and allies audit platform algorithms and AI
          </p>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <Script
              html={`<!-- style for form -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

  #my-form {
    font-family: 'Source Sans 3', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
.input {
  color: #000000;
  cursor: auto;
  padding: 0.5rem 1rem;
  border-color: #000000;
  border-width: 0px;
  border-radius: 4px;
  background-color: #ffffff;
  height: 32px;
}


textarea {
  color: #000000;
  cursor: auto;
  padding: 0.5rem;
  border-color: #000000;
  border-width: 0px;
  border-radius: 4px;
  background-color: #ffffff;
  height: 32px;
}



button[type="submit"] {
  gap: 16px;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  font-style: normal;
  align-items: center;
  font-weight: 600;
  padding-top: 16px;
  transition: 0.3s;
  border-color: #000000;
  border-width: 0px;
  padding-left: 32px;
  border-radius: 60px;
  padding-right: 32px;
  padding-bottom: 16px;
  justify-content: center;
  background-color: #ffffff;
  color: #fbf4e6;
  width: 100%;
  font-size: 1.1rem;
  margin-left: 0px;
  transition: 0.3s;
  border-radius: 4px;
  background-color: #332e24;
  max-width: 288px;
  text-align: center;
}
button[type="submit"]:hover {
  color: #fbf4e6ff;
  background-color: #605a4fff;
  opacity: 1;
}
.checkbox-group {
  display: flex;
  align-items: "center";
  gap: 1em;
}

p#my-form-status {
  color: #000000;
  font-weight: 700;
}

#my-form-status[data-success="false"] {
  color: #d04c4b !important;
}
#my-form-status[data-success="true"] {
  color: #000000;
  font-size: 1.3rem;
}


</style>

<!-- modify this form HTML and place wherever you want your form -->
<form id="my-form" action="https://formspree.io/f/xknadlko" method="POST">
  <input required type="text" placeholder="Name" name="name" class="input" />
  <input  type="text" name="role" placeholder="Role and affiliation" class="input" />
  <input required type="text" name="email" placeholder="Email" class="input" />
  <textarea name="message" rows="3" placeholder="Message"></textarea>
  <div class="checkbox-group">
    <input type="checkbox" name="subscribe" />
    <label> Subscribe to our email list</label>
  </div>
  <button id="my-form-button" type="submit"><span>Submit</span></button>
  <p id="my-form-status"></p>

</form>
<!-- Place this script at the end of the body tag -->
<script>
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
</script>

<style data-href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&amp;display=swap">@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3aPA.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nAkw.woff) format('woff')}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lujVj9_mf.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lujVj9_mf.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lujVj9_mf.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lujVj9_mf.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lujVj9_mf.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lujVj9_mf.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmhdu3cOWxy40.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwkxdu3cOWxy40.woff2) format('woff2');unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmxdu3cOWxy40.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmBdu3cOWxy40.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmRdu3cOWxy40.woff2) format('woff2');unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Source Sans Pro';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/sourcesanspro/v22/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}</style>`}
            ></Script>
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
            <button className="home-register button-style-1 button">
              <img
                alt="image"
                src="/logos/wao-official-logo.svg"
                loading="lazy"
                className="home-image10"
              />
            </button>
          </div>
          <h1 className="home-text35">
            The Workers&apos; Algorithm Observatory
          </h1>
          <a
            href="mailto:thewao@princeton.edu?subject=WAO - Inquiry"
            className="home-link18"
          >
            <h1 className="home-text36">thewao@princeton.edu</h1>
          </a>
        </div>
      </section>
      <div>
        <div className="home-container07">
          <Script
            html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
          ></Script>
        </div>
      </div>
      <div>
        <div className="home-container09">
          <Script
            html={`<style>
#scrollbar::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#scrollbar::-webkit-scrollbar
{
	height: 12px;
	background-color: #F5F5F5;
	border-radius: 10px;
}

#scrollbar::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
</style>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
