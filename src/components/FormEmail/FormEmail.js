import React, { PropTypes } from 'react'

import iconCheckmark from '../../assets/icons/icon-checkmark.svg'

class FormEmail extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)

    this.state = {
      checkmarkActive: 'FormEmail-checkmark-hidden',
      placeholder: 'What\'s your email?'
    }

    this.formIds = {
      email: '1632870892',
    }
  }

  submitForm(e) {
    e.preventDefault()
    const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfd35xRCBfA7WQni0FFhLWRm02_obkcMs9bneB4BNUwrYI4xA'

    const inputs = [
      this.refs['FormEmail-input-email'],
    ]

    if (inputs[0].value === '') {
      return
    }

    const buildInputStr = (ref) => `entry.${ref.id}=${ref.value}`
    const [ nameStr, emailStr, messageStr ] = inputs.map(buildInputStr)

    const requestUrl = `${baseUrl}/formResponse?${nameStr}&${emailStr}&${messageStr}&submit=Submit`
    fetch(requestUrl,
      {
        method: 'POST',
        mode: 'no-cors'
      }
    )

    const clearRef = (ref) => ref.value = null
    inputs.map(clearRef)

    this.setState({
      checkmarkActive: '',
      placeholder: 'Your info is on the way!'
    })
  }

  render () {
    const { btnText, className } = this.props

    return (
      <form className={`FormEmail-form ${className}`}
        id="form"
        action=""
        method="POST"
        target="no-target">

        <label className="FormEmail-input-label">
          Email
          <input id={this.formIds.email}
            className="FormEmail-input FormEmail-input-email"
            ref="FormEmail-input-email"
            name="FormEmail-email"
            required
            type="email"
            placeholder={this.state.placeholder} />

          <img className={`FormEmail-checkmark ${this.state.checkmarkActive}`}
            src={iconCheckmark}
            role="presentation"/>
        </label>

        <div className="FormEmail-form-footer">
          <button className="Button FormEmail-submit-btn"
            type="submit"
            onClick={this.submitForm}>
            {btnText}
          </button>
        </div>
      </form>
    )
  }
}

export default FormEmail
