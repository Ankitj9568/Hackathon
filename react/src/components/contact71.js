import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact71.css'

const Contact71 = (props) => {
  return (
    <div className="contact71-container1 thq-section-padding">
      <div className="contact71-max-width thq-section-max-width">
        <div className="contact71-content1 thq-flex-row">
          <div className="contact71-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact71-text20 thq-heading-2">Locations</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact71-text21 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact71-content3 thq-flex-row">
          <div className="contact71-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact71-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact71-text18 thq-heading-3">Bucharest</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact71-text19 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact71-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact71-container4">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact71-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact71-text17 thq-heading-3">
                    Cluj - Napoca
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact71-text16 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact71-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact71.defaultProps = {
  location2Description: undefined,
  location2: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1574616979112-f9f52d3747f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJ1Y2hhcmVzdHxlbnwwfHx8fDE3MjExNDQ1MTR8MA&ixlib=rb-4.0.3&w=1400',
  location2ImgAlt: 'image2Alt',
  location2ImgSrc:
    'https://images.unsplash.com/photo-1618826524225-439b385bb1c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsdWp8ZW58MHx8fHwxNzIxMTQ0NTI0fDA&ixlib=rb-4.0.3&w=1400',
  location1: undefined,
  location1Description: undefined,
  heading1: undefined,
  content1: undefined,
  location1ImgAlt: 'image1Alt',
}

Contact71.propTypes = {
  location2Description: PropTypes.element,
  location2: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location2ImgAlt: PropTypes.string,
  location2ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  location1ImgAlt: PropTypes.string,
}

export default Contact71
