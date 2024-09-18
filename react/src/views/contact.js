import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import SignUp10 from '../components/sign-up10'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - exported project</title>
        <meta property="og:title" content="Contact - exported project" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="contact-text1 thq-link thq-body-small">Link1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text2 thq-link thq-body-small">Link2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text3 thq-link thq-body-small">Link3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text4 thq-link thq-body-small">Link4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text5 thq-link thq-body-small">Link5</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="contact-text6">Action 1</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="contact-text7">Action 2</span>
          </Fragment>
        }
      ></Navbar4>
      <SignUp10
        action1={
          <Fragment>
            <span className="contact-text8 thq-body-small">
              Create an account
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text9 thq-heading-2">
              Create an account
            </span>
          </Fragment>
        }
      ></SignUp10>
    </div>
  )
}

export default Contact
