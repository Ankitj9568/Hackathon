import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content1 thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span>
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form3-text18 thq-body-small">
                    Get in touch with us
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form3-content2">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact-form3-text17 thq-heading-2">
                      Contact us
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form3-text19 thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form3-checkbox1">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text16 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span>
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form3-text22 thq-body-small">
                      Submit
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  heading1: undefined,
  imageAlt: 'Image1',
  content2: undefined,
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
  content1: undefined,
  action: undefined,
}

ContactForm3.propTypes = {
  heading1: PropTypes.element,
  imageAlt: PropTypes.string,
  content2: PropTypes.element,
  imageSrc: PropTypes.string,
  content1: PropTypes.element,
  action: PropTypes.element,
}

export default ContactForm3
