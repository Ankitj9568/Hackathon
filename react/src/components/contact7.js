import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container1 thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content1 thq-flex-row">
          <div className="contact7-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact7-text17 thq-heading-2">Locations</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact7-text18 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content3 thq-flex-row">
          <div className="contact7-container2">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact7-text19 thq-heading-3">Bucharest</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact7-text20 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container3">
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
          <div className="contact7-container4">
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact7-text21 thq-heading-3">
                    Cluj - Napoca
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact7-text16 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact7-container5">
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

Contact7.defaultProps = {
  location2Description: undefined,
  heading1: undefined,
  content1: undefined,
  location1: undefined,
  location1ImgAlt: 'image1Alt',
  location1Description: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1574616979112-f9f52d3747f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJ1Y2hhcmVzdHxlbnwwfHx8fDE3MjExNDQ1MTR8MA&ixlib=rb-4.0.3&w=1400',
  location2: undefined,
}

Contact7.propTypes = {
  location2Description: PropTypes.element,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  location1: PropTypes.element,
  location1ImgAlt: PropTypes.string,
  location1Description: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location2: PropTypes.element,
}

export default Contact7
