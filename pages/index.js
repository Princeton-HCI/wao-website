import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import NavigationLinks from '../components/navigation-links'
import Description from '../components/description'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
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
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/06894b01-ea7b-4073-94a2-d66e5719a755/6cd1a78d-e016-4e24-874f-140ea9ef182b?org_if_sml=1"
          />
        </Head>
        <header data-role="Accordion" className="home-header">
          <div className="home-container1">
            <img
              alt="image"
              src="/logos/logo_wao.svg"
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
          <div className="home-container2">
            <div className="home-container3">
              <h2 className="home-header1">
                Worker-led audits in the platform economy
              </h2>
              <a href="#contact" className="home-link button">
                Contact Us
              </a>
            </div>
            <img
              alt="image"
              src="/illustration_hero.svg"
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
              image_src="/illustration_audit.svg"
            ></Description>
            <Description
              text="Our group is building tools and support for workers and allies"
              text1="Our group is building tools and support for workers and allies"
              image_src="/illustration_toolbox.svg"
              rootClassName="description-root-class-name"
            ></Description>
          </div>
        </section>
        <section id="tools" className="home-tools">
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
          <div className="home-fair-fare-box">
            <img
              alt="image"
              src="/logos/logo_fairfare-200w.png"
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
                anonymously link their job data to analyze average fare
                breakdowns and changes over time, in several states nationwide.
                This pilot study runs through Summer 2024, is based at Princeton
                University, and is funded by the Mozilla Foundation. Read about
                our launch in this
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
                with drivers in Colorado, and sign up for the study at the 
              </span>
              <a
                href="https://getfairfare.org/driver/landing"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link03"
              >
                getfairfare.org
              </a>
              <span> website.</span>
              <br className="home-text14"></br>
            </p>
          </div>
          <div className="home-shipt-box">
            <img
              alt="image"
              src="/illustration_shipt.svg"
              loading="lazy"
              className="home-image03"
            />
            <h3 className="home-title2">
              <span>The Shipt calculator</span>
              <br></br>
            </h3>
            <p className="home-description1">
              <span className="home-text17">
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
                href="https://home.coworker.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05"
              >
                Cowo
              </a>
              <a
                href="https://home.coworker.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link06"
              >
                rker.org
              </a>
              <span>
                {' '}
                and our team to crowdsource and analyze data shared by over one
                hundred workers using a custom texting bot. We found that wages
                decreased for a majority but increased for a minority,
                suggesting that the algorithm determines more than just pay – it
                affects worker agency and well-being, too. Learn more about this
                in a
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
                className="home-link07"
              >
                blog post
              </a>
              <span>
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
                className="home-link08"
              >
                11-minute film
              </a>
              <span>
                {' '}
                produced in collaboration with the MIT Media Lab and the FAccT
                conference.
              </span>
              <br className="home-text24"></br>
            </p>
          </div>
        </section>
        <section id="about" className="home-about">
          <div className="home-header2">
            <h2 className="home-title3">About</h2>
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
          <div className="home-details-box">
            <p className="home-caption3">
              <span>
                Investigating black-box platform algorithms, such as those used
                by Uber and DoorDash, faces major challenges in accessing the
                data necessary for a meaningful audit. To solve this, we’re
                developing tools and support for workers and allies to
                crowdsource data and investigate the black-box algorithmic
                systems behind the platforms that determine pay, schedule, and
                more, in the platform economy and beyond. 
              </span>
              <span>
                We launched the WAO in 2022. We are currently a nonprofit
                initiative with funding from the
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
                className="home-link09"
              >
                Mozilla Tech Fund 
              </a>
              <a
                href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                2023 &quot;Auditing AI&quot; cohort
              </a>
              <span>.</span>
              <br></br>
            </p>
          </div>
        </section>
        <section id="team" className="home-team">
          <div className="home-header3">
            <h2 className="home-title4">Team</h2>
            <p className="home-caption4">
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
          <div className="home-people">
            <div className="home-teammate brand">
              <img
                alt="image"
                src="/teammate_samantha-200h.png"
                loading="lazy"
                className="home-image04"
              />
              <a
                href="https://www.samantha-dalal.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link11"
              >
                Samantha Dalal
              </a>
              <a
                href="https://www.colorado.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12"
              >
                University of Colorado Boulder
              </a>
            </div>
            <div className="home-teammate1 brand">
              <img
                alt="image"
                src="/teammate_danny-200h.png"
                loading="lazy"
                className="home-image05"
              />
              <a
                href="https://www.linkedin.com/in/danielspitzberg/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link13"
              >
                Danny Spitzberg
              </a>
              <a
                href="https://www.turningbasinlabs.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14"
              >
                Turning Basin Labs
              </a>
            </div>
            <div className="home-teammate2 brand">
              <img
                alt="image"
                src="/teammate_dan-200h.png"
                loading="lazy"
                className="home-image06"
              />
              <a
                href="https://media.mit.edu/people/dcalacci"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                Dan Calacci
              </a>
              <a
                href="https://www.media.mit.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link16"
              >
                MIT Media Lab
              </a>
            </div>
            <div className="home-teammate3 brand">
              <img
                alt="image"
                src="/teammate_andres-200h.png"
                loading="lazy"
                className="home-image07"
              />
              <a
                href="https://www.andresmh.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                Andrés Monroy-Hernández
              </a>
              <a
                href="https://www.princeton.edu/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                Princeton University
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="home-contact">
          <h2 className="home-title5">Contact</h2>
          <p className="home-caption5">
            We help workers and allies audit platform algorithms and AI
          </p>
          <div className="home-div">
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
        </section>
        <section className="home-footer">
          <div>
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
          <div>
            <Script
              html={`<script>
    ScrollReveal().reveal('.speaker');
    ScrollReveal().reveal('.image-notes');
</script>`}
            ></Script>
          </div>
          <div className="home-background">
            <img
              alt="image"
              src="/bg_circlebackground.svg"
              loading="lazy"
              className="home-image08"
            />
            <img alt="image" src="/bg_line.svg" className="home-image09" />
          </div>
          <div className="home-hero-content">
            <div className="home-caption6">
              <button className="home-register button-style-1 button">
                <img
                  alt="image"
                  src="/logos/logo_wao.svg"
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
              className="home-link19"
            >
              <p className="home-text36">thewao@princeton.edu</p>
            </a>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-new-1);
          }
          .home-header {
            width: 100%;
            height: 169px;
            display: flex;
            max-width: 1200px;
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image {
            width: 120px;
            height: auto;
            object-fit: fill;
          }
          .home-caption {
            color: var(--dl-color-new-5);
            width: auto;
            font-size: 34px;
            font-style: normal;
            font-weight: 600;
          }
          .home-hero {
            width: 100%;
            height: auto;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #fbf4e6;
          }
          .home-container2 {
            width: 100%;
            height: 70vh;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-image: radial-gradient(
              circle at right,
              rgba(208, 76, 75, 0.8) 65%,
              rgba(196, 190, 176, 0.5) 37%
            );
          }
          .home-container3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header1 {
            color: var(--dl-color-new-5);
            width: auto;
            font-size: 3rem;
            max-width: 700px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            line-height: 60px;
          }
          .home-link {
            color: var(--dl-color-new-1);
            width: 100%;
            font-size: 1.1rem;
            max-width: var(--dl-size-size-xxlarge);
            align-self: flex-start;
            transition: 0.3s;
            margin-left: 0px;
            border-radius: var(--dl-radius-radius-radius4);
            text-decoration: none;
            background-color: var(--dl-color-new-5);
          }
          .home-link:hover {
            color: var(--dl-color-new-1);
            opacity: 1;
            background-color: var(--dl-color-new-4);
          }
          .home-image01 {
            width: 731px;
            height: 618px;
            min-width: var(--dl-size-size-xxlarge);
            max-height: var(--dl-size-size-medium);
            min-height: var(--dl-size-size-xxlarge);
            object-fit: inherit;
          }
          .home-stat {
            gap: var(--dl-space-space-unit);
            width: 100%;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-tools {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #fbf4e6;
          }
          .home-title {
            color: var(--dl-color-new-5);
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption1 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
          }
          .home-fair-fare-box {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: TwoUnits;
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-yellow-2);
          }
          .home-image02 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .home-title1 {
            color: var(--dl-color-new-5);
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description {
            color: var(--dl-color-new-5);
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text08 {
            font-style: normal;
            font-weight: 700;
          }
          .home-link01 {
            text-decoration: underline;
          }
          .home-link02 {
            text-decoration: underline;
          }
          .home-link03 {
            text-decoration: underline;
          }
          .home-text14 {
            text-decoration: underline;
          }
          .home-shipt-box {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: TwoUnits;
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-yellow-2);
          }
          .home-image03 {
            width: auto;
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .home-title2 {
            color: var(--dl-color-new-5);
            font-size: 50px;
            font-style: normal;
            font-weight: 600;
            line-height: 60px;
          }
          .home-description1 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text17 {
            font-style: normal;
            font-family: 'Source Sans Pro';
            font-weight: 700;
          }
          .home-link04 {
            text-decoration: underline;
          }
          .home-link05 {
            text-decoration: underline;
          }
          .home-link06 {
            text-decoration: underline;
          }
          .home-link07 {
            text-decoration: underline;
          }
          .home-link08 {
            text-decoration: underline;
          }
          .home-text24 {
            font-style: normal;
            font-weight: 700;
          }
          .home-about {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #fbf4e6;
          }
          .home-header2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-new-5);
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption2 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
          }
          .home-details-box {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-self: flex-start;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: TwoUnits;
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: rgba(196, 190, 176, 0.25);
          }
          .home-caption3 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            max-width: 640px;
            line-height: 27px;
          }
          .home-link09 {
            text-decoration: underline;
          }
          .home-link10 {
            text-decoration: underline;
          }
          .home-team {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #fbf4e6;
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-title4 {
            color: var(--dl-color-new-5);
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption4 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
          }
          .home-people {
            width: 100%;
            columns: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            grid-template-rows: repeat(1, 1fr);
          }
          .home-teammate {
            gap: var(--dl-space-space-unit);
          }
          .home-image04 {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-link11 {
            color: var(--dl-color-new-5);
            font-style: normal;
            font-weight: 600;
            text-decoration: underline;
          }
          .home-link12 {
            color: var(--dl-color-new-4);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-teammate1 {
            gap: var(--dl-space-space-unit);
          }
          .home-image05 {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-link13 {
            color: var(--dl-color-new-5);
            font-style: normal;
            font-weight: 600;
            text-decoration: underline;
          }
          .home-link14 {
            color: var(--dl-color-new-4);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-teammate2 {
            gap: var(--dl-space-space-unit);
          }
          .home-image06 {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-link15 {
            color: var(--dl-color-new-5);
            font-style: normal;
            font-weight: 600;
            text-decoration: underline;
          }
          .home-link16 {
            color: var(--dl-color-new-4);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
          }
          .home-teammate3 {
            gap: var(--dl-space-space-unit);
            border-right-width: 0px;
          }
          .home-image07 {
            width: 100px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .home-link17 {
            color: var(--dl-color-new-5);
            font-style: normal;
            font-weight: 600;
            text-decoration: underline;
          }
          .home-link18 {
            color: var(--dl-color-new-4);
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
          }
          .home-contact {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: #fbf4e6;
          }
          .home-title5 {
            color: var(--dl-color-new-5);
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
            line-height: 100px;
          }
          .home-caption5 {
            color: var(--dl-color-new-5);
            font-size: 18px;
            font-weight: bold;
            line-height: 27px;
          }
          .home-div {
            width: 500px;
            max-width: 50%;
          }
          .home-footer {
            width: 100%;
            height: 85vh;
            display: flex;
            opacity: 0.9;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/bg_grainy-1500w.png');
            background-position: center;
          }
          .home-background {
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 85%;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image08 {
            right: 0px;
            bottom: 0px;
            filter: invert();
            height: 90%;
            position: absolute;
            object-fit: cover;
          }
          .home-image09 {
            height: 100%;
            z-index: 100;
            object-fit: cover;
          }
          .home-hero-content {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1000px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-caption6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-register {
            padding-top: var(--dl-space-space-halfunit);
            border-color: #ef533c;
            border-width: 0px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .home-image10 {
            width: 100px;
            object-fit: cover;
          }
          .home-text35 {
            color: rgb(255, 255, 255);
            font-size: 3em;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-link19 {
            display: contents;
          }
          .home-text36 {
            color: rgb(255, 255, 255);
            font-size: 1.5em;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-right: var(--dl-space-space-halfunit);
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .home-caption {
              color: var(--dl-color-gray-black);
            }
            .home-hero {
              width: 100%;
              height: auto;
              max-width: auto;
              padding-left: var(--dl-space-space-fiveunits);
              padding-right: var(--dl-space-space-fiveunits);
              justify-content: flex-start;
            }
            .home-container2 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: auto;
              max-width: auto;
              margin-left: 0px;
              margin-right: 0px;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-container3 {
              align-self: flex-start;
            }
            .home-header1 {
              width: 991px;
              height: 120px;
              max-width: 600px;
              padding-left: var(--dl-space-space-halfunit);
            }
            .home-image01 {
              width: auto;
              height: auto;
              align-self: flex-end;
              padding-left: var(--dl-space-space-halfunit);
            }
            .home-stat {
              width: 100%;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .home-team {
              max-width: auto;
            }
            .home-people {
              height: auto;
              flex-direction: row;
              grid-template-rows: repeat(4, 1fr);
              grid-template-columns: repeat(2, 1fr);
            }
            .home-teammate {
              width: 25%;
              height: 250px;
              border-color: rgba(0, 0, 0, 0);
            }
            .home-image04 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
            .home-link11 {
              font-size: 11px;
              text-align: center;
            }
            .home-link12 {
              font-size: 11px;
              text-align: center;
            }
            .home-teammate1 {
              width: 25%;
              height: 250px;
              align-items: center;
              border-right-width: 0px;
            }
            .home-image05 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
            .home-link13 {
              font-size: 11px;
              text-align: center;
            }
            .home-link14 {
              font-size: 11px;
              text-align: center;
            }
            .home-teammate2 {
              width: 25%;
              height: 250px;
              border-color: rgba(0, 0, 0, 0);
            }
            .home-image06 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
            .home-link15 {
              font-size: 11px;
              text-align: center;
            }
            .home-link16 {
              font-size: 11px;
              text-align: center;
            }
            .home-teammate3 {
              width: 25%;
              height: 250px;
              border-color: rgba(0, 0, 0, 0);
              border-top-width: 1px;
            }
            .home-image07 {
              width: var(--dl-size-size-medium);
              height: var(--dl-size-size-medium);
            }
            .home-link17 {
              font-size: 11px;
              text-align: center;
            }
            .home-link18 {
              font-size: 11px;
              text-align: center;
            }
            .home-register {
              background-color: #d24b4a;
            }
            .home-text35 {
              margin-right: var(--dl-space-space-halfunit);
            }
            .home-text36 {
              margin-right: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .home-header {
              gap: var(--dl-space-space-twounits);
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-container1 {
              align-self: flex-start;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-hero {
              height: auto;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-container2 {
              gap: var(--dl-space-space-unit);
              width: 100%;
              height: 598px;
              padding: var(--dl-space-space-twounits);
              align-self: center;
              border-color: #d04c4b;
              border-style: dashed;
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-container3 {
              align-self: stretch;
            }
            .home-header1 {
              width: 100%;
              height: auto;
              align-self: flex-start;
            }
            .home-image01 {
              width: auto;
              height: auto;
              min-width: auto;
              align-self: flex-end;
              max-height: auto;
              min-height: 254px;
            }
            .home-stat {
              flex-direction: column;
            }
            .home-tools {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption1 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-fair-fare-box {
              gap: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-title1 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-shipt-box {
              gap: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-title2 {
              font-size: 24px;
              line-height: 28px;
            }
            .home-description1 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-about {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title3 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption2 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-details-box {
              gap: var(--dl-space-space-unit);
            }
            .home-caption3 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-team {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title4 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption4 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-people {
              height: auto;
              align-self: center;
              align-items: center;
              flex-direction: column;
            }
            .home-teammate {
              width: auto;
              border-color: rgba(0, 0, 0, 0);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image04 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-link11 {
              font-size: 16px;
            }
            .home-link12 {
              font-size: 16px;
            }
            .home-teammate1 {
              width: auto;
              border-color: rgba(0, 0, 0, 0);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image05 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-link13 {
              font-size: 16px;
            }
            .home-link14 {
              font-size: 16px;
            }
            .home-teammate2 {
              width: auto;
              border-color: rgba(0, 0, 0, 0);
            }
            .home-image06 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-link15 {
              font-size: 16px;
            }
            .home-link16 {
              font-size: 16px;
            }
            .home-teammate3 {
              width: auto;
              border-color: rgba(0, 0, 0, 0);
            }
            .home-image07 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              border-radius: var(--dl-radius-radius-radius4);
            }
            .home-link17 {
              font-size: 16px;
            }
            .home-link18 {
              font-size: 16px;
            }
            .home-contact {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title5 {
              font-size: 30px;
              line-height: 33px;
            }
            .home-caption5 {
              width: 90%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-div {
              width: 100%;
              max-width: 100%;
            }
            .home-footer {
              height: 60vh;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption6 {
              gap: var(--dl-space-space-unit);
            }
            .home-register {
              padding: var(--dl-space-space-halfunit);
              background-color: transparent;
            }
            .home-text35 {
              width: 450px;
              font-size: 3rem;
            }
            .home-text36 {
              width: 450px;
              font-size: 1.5rem;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-shrink: 0;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
            }
            .home-hero {
              height: auto;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-container2 {
              width: 100%;
              height: auto;
              max-width: 100%;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-header1 {
              width: auto;
              height: auto;
              font-size: 30px;
              align-self: flex-start;
              line-height: 36px;
            }
            .home-link {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .home-image01 {
              width: 196px;
              align-self: flex-end;
              max-height: auto;
              min-height: var(--dl-size-size-xlarge);
            }
            .home-stat {
              max-width: auto;
            }
            .home-fair-fare-box {
              background-color: #ffdfa2;
            }
            .home-shipt-box {
              background-color: #ffdfa2;
            }
            .home-details-box {
              background-color: #2a2629;
            }
            .home-caption3 {
              color: var(--dl-color-new-1);
            }
            .home-team {
              max-height: auto;
              min-height: 635px;
            }
            .home-people {
              gap: var(--dl-space-space-unit);
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .home-teammate {
              width: auto;
              height: 250px;
              padding-top: var(--dl-space-space-unit);
              border-color: rgba(0, 0, 0, 0);
              margin-bottom: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-image04 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              max-width: auto;
              max-height: auto;
            }
            .home-link11 {
              font-size: 16px;
            }
            .home-link12 {
              font-size: 16px;
            }
            .home-teammate1 {
              width: auto;
              height: 250px;
              padding-top: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .home-image05 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              max-width: auto;
              max-height: auto;
            }
            .home-link13 {
              font-size: 16px;
            }
            .home-link14 {
              font-size: 16px;
            }
            .home-teammate2 {
              width: auto;
              height: 250px;
              padding-top: var(--dl-space-space-twounits);
              border-color: rgba(0, 0, 0, 0);
              justify-content: flex-start;
            }
            .home-image06 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              max-width: auto;
              max-height: auto;
            }
            .home-link15 {
              font-size: 16px;
            }
            .home-link16 {
              font-size: 16px;
              text-decoration: inherit;
            }
            .home-teammate3 {
              width: auto;
              height: 250px;
              padding-top: var(--dl-space-space-twounits);
              border-color: rgba(0, 0, 0, 0);
              justify-content: flex-start;
            }
            .home-image07 {
              width: var(--dl-size-size-large);
              height: var(--dl-size-size-large);
              max-width: auto;
              max-height: auto;
            }
            .home-link17 {
              font-size: 16px;
              text-align: center;
            }
            .home-link18 {
              font-size: 16px;
              text-decoration: inherit;
            }
            .home-footer {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-hero-content {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-text35 {
              width: 100%;
              font-size: 3rem;
            }
            .home-text36 {
              width: 100%;
              font-size: 1.5rem;
              text-decoration: underline;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
