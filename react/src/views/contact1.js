import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import SignIn3 from '../components/sign-in3'
import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-container">
      <Helmet>
        <title>Contact1 - exported project</title>
        <meta property="og:title" content="Contact1 - exported project" />
      </Helmet>
      <Navbar41
        link1={
          <Fragment>
            <span className="contact1-text10 thq-link thq-body-small">
              Link1
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact1-text11 thq-link thq-body-small">
              Link2
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact1-text12 thq-link thq-body-small">
              Link3
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact1-text13 thq-link thq-body-small">
              Link4
            </span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact1-text14 thq-link thq-body-small">
              Link5
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact1-text15">Action 1</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact1-text16">Action 2</span>
          </Fragment>
        }
      ></Navbar41>
      <SignIn3
        action1={
          <Fragment>
            <span className="contact1-text17 thq-body-small">Sign in</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact1-text18 thq-body-small">
              Create an account
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact1-text19 thq-body-large">
              New to our community
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact1-text20 thq-heading-2">User Sign in</span>
          </Fragment>
        }
      ></SignIn3>
    </div>
  )
}

export default Contact1
