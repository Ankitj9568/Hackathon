import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-up10.css'

const SignUp10 = (props) => {
  return (
    <div className="sign-up10-container1">
      <img
        alt={props.image1Alt}
        src="https://img.freepik.com/free-photo/scene-with-photorealistic-logistics-operations-proceedings_23-2151468875.jpg?t=st=1725676932~exp=1725680532~hmac=8af33f7ee8be13ac45845f696a409a9fda03df3ef42ee50ee0a2076496f649ea&amp;w=740"
        loading="eager"
        className="sign-up10-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-up10-container2"></div>
      <div className="sign-up10-form-root thq-section-padding">
        <div className="sign-up10-form1 thq-section-padding">
          <div className="sign-up10-title-root">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="sign-up10-text8 thq-heading-2">
                    Create an account
                  </h2>
                </Fragment>
              )}
            </h2>
          </div>
          <form className="sign-up10-form2">
            <div className="sign-up10-email">
              <label htmlFor="thq-sign-up-10-email" className="thq-body-large">
                Email
              </label>
              <input
                type="email"
                id="thq-sign-up-10-email"
                required="true"
                placeholder="Email address"
                className="sign-up10-textinput1 thq-body-large thq-input"
              />
            </div>
            <div className="sign-up10-password">
              <div className="sign-up10-textfield">
                <div className="sign-up10-container3">
                  <label
                    htmlFor="thq-sign-up-10-password"
                    className="thq-body-large"
                  >
                    Password
                  </label>
                  <div className="sign-up10-hide-password">
                    <svg viewBox="0 0 1024 1024" className="sign-up10-icon1">
                      <path d="M317.143 762.857l44.571-80.571c-66.286-48-105.714-125.143-105.714-206.857 0-45.143 12-89.714 34.857-128.571-89.143 45.714-163.429 117.714-217.714 201.714 59.429 92 143.429 169.143 244 214.286zM539.429 329.143c0-14.857-12.571-27.429-27.429-27.429-95.429 0-173.714 78.286-173.714 173.714 0 14.857 12.571 27.429 27.429 27.429s27.429-12.571 27.429-27.429c0-65.714 53.714-118.857 118.857-118.857 14.857 0 27.429-12.571 27.429-27.429zM746.857 220c0 1.143 0 4-0.571 5.143-120.571 215.429-240 432-360.571 647.429l-28 50.857c-3.429 5.714-9.714 9.143-16 9.143-10.286 0-64.571-33.143-76.571-40-5.714-3.429-9.143-9.143-9.143-16 0-9.143 19.429-40 25.143-49.714-110.857-50.286-204-136-269.714-238.857-7.429-11.429-11.429-25.143-11.429-39.429 0-13.714 4-28 11.429-39.429 113.143-173.714 289.714-289.714 500.571-289.714 34.286 0 69.143 3.429 102.857 9.714l30.857-55.429c3.429-5.714 9.143-9.143 16-9.143 10.286 0 64 33.143 76 40 5.714 3.429 9.143 9.143 9.143 15.429zM768 475.429c0 106.286-65.714 201.143-164.571 238.857l160-286.857c2.857 16 4.571 32 4.571 48zM1024 548.571c0 14.857-4 26.857-11.429 39.429-17.714 29.143-40 57.143-62.286 82.857-112 128.571-266.286 206.857-438.286 206.857l42.286-75.429c166.286-14.286 307.429-115.429 396.571-253.714-42.286-65.714-96.571-123.429-161.143-168l36-64c70.857 47.429 142.286 118.857 186.857 192.571 7.429 12.571 11.429 24.571 11.429 39.429z"></path>
                    </svg>
                    <span className="thq-body-small">Hide</span>
                  </div>
                </div>
                <input
                  type="password"
                  id="thq-sign-up-10-password"
                  required="true"
                  placeholder="Password"
                  className="sign-up10-textinput2 thq-body-large thq-input"
                />
              </div>
            </div>
          </form>
          <button type="submit" className="sign-up10-button thq-button-filled">
            <span>
              {props.action1 ?? (
                <Fragment>
                  <span className="sign-up10-text7 thq-body-small">
                    Create an account
                  </span>
                </Fragment>
              )}
            </span>
          </button>
          <p className="thq-body-large sign-up10-text6">
            Already have an account? Sign in
          </p>
        </div>
      </div>
    </div>
  )
}

SignUp10.defaultProps = {
  action1: undefined,
  image1Alt: 'SignUp Image',
  heading1: undefined,
}

SignUp10.propTypes = {
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
}

export default SignUp10
