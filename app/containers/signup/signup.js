import { React } from 'globalImports'

const validEmailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
const validPasswordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholderEmail: 'Email',
      placeholderPassword: 'Password',
      placeholderVerify: 'Verify',
      placeholderSecurity: 'Security Question',
      email: '',
      password: '',
      error: '',
      securityQuestion: '',
      securityAnswer: '',
      validEmail: false,
      validPassword: false,
      verifyPassword: false,
      validSecurityAnswer: false,
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderSubmit = this.renderSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.renderSecurityDropDownList = this.renderSecurityDropDownList.bind(this)
    this.renderSecurityInput= this.renderSecurityInput.bind(this)
  }



  renderSignUp() {
    return (
      <div className="signup-render-container">
        <h1>Register New User</h1>
        {this.renderError()}
        <input type="text" placeholder={this.state.placeholderEmail} onChange={this.handleInput} ref="emailInput"/>
        <input type="password" placeholder={this.state.placeholderPassword} onChange={this.handleInput} ref="passwordInput"/>
        <input type="password" placeholder={this.state.placeholderVerify} onChange={this.handleInput} ref="verifyPasswordInput"/>
        {this.renderSubmit()}
        <button className="reset-button" onClick={this.resetForm}>Reset</button>
        {this.renderSecurityDropDownList()}
        {this.renderSecurityInput()}
      </div>
    )
  }

  handleInput(event) {
    event.preventDefault()
    const validEmail = this.state.validEmail
    const validPassword = this.state.validPassword
    const verifyPassword = this.state.verifyPassword
    const validSecurityAnswer =this.state.validSecurityAnswer
    switch (event.target.placeholder) {

      case 'Email':

        if(validEmailRegex.test(event.target.value)) {
          this.setState({
            validEmail: true,
            email: event.target.value
          })
        }
        else {
          if(validEmail) {
            this.setState({
              validEmail: false,
              emial: ''
            })
          }
        }

        break

      case 'Password':
        if(validPasswordRegex.test(event.target.value)) {
          this.setState({
            validPassword: true,
            password: event.target.value
          })
        }
        else {
          if(validPassword) {
            this.setState({
              validPassword: false,
              password: ''
            })
          }
        }
        break

      case 'Verify':
        if(event.target.value === this.state.password) {
          this.setState({
            verifyPassword: true
          })
        }
        else {
          if(verifyPassword) {
            this.setState({
              verifyPassword: false
            })
          }
        }
        break

      case 'Security Question':
        const dropdown = this.refs.dropdown
        const index = dropdown.selectedIndex
        if(event.target.value.length > 0) {
          console.log(
            event.target.value.length,
            event.target.value
          )
          this.setState({
            validSecurityAnswer: true,
            securityQuestion: dropdown.options[index].value,
            securityAnswer: event.target.value
          })
        }
        else {
          if(validSecurityAnswer) {
            this.state({
              validSecurityAnswer: false,
              securityQuestion: '',
              securityAnswer: ''
            })
          }
        }
        break
      default:
        break
      }

  }

  renderSubmit() {
    console.log(
      this.state.validEmail,
      this.state.validPassword,
      this.state.verifyPassword,
      this.state.validSecurityAnswer,
      (this.state.validEmail && this.state.validPassword && this.state.verifyPassword && this.state.validSecurityAnswer)
    )
    if(
      this.state.validEmail &&
      this.state.validPassword &&
      this.state.verifyPassword &&
      this.state.validSecurityAnswer
      ) {
      return (
        <div>
          <button className='signup-button-valid' onClick={this.handleSubmit}>Sign Up</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <button className='signup-button-invalid'>Sign Up</button>
        </div>
      )
    }
  }

  handleSubmit() {
    //TODO: put into db here
    // const fetchURL = 'some shit goes here'
    // let user = {
    //   email: this.state.email,
    //   password: this.state.password,
    //   securityQuestion: this.state.securityQuestion,
    //   securityAnswer: this.state.securityAnswer,
    // }
    //
    // let request = new Request( fetchURL, {
    //  method: 'POST',
    //  headers: new Headers({
    //    'Accept': 'application/json, application/xml, text/html, text/plain, */*',
    //    'Content-Type': 'application/json'
    //  }),
    //  body: JSON.stringify( user )
    // })
    //
    // fetch(request)
    // .then(response => {
    //   if(response.ok) {
    //     return (
    //       <div>
    //         <h1>New user registered!</h1>
    //       </div>
    //     )
    //   }
    //   else {
    //     return (
    //       <div>
    //         <h1>try again mothersucker!</h1>
    //       </div>
    //     )
    //   }
    // })
    console.log(
      this.state.email,
      this.state.password,
      this.state.securityQuestion,
      this.state.securityAnswer,
    )

  }

  resetForm() {
    this.refs.emailInput.value = ''
    this.refs.passwordInput.value = ''
    this.refs.verifyPasswordInput.value = ''
    this.refs.securityQuestion.value = ''
    this.setState({
      email: '',
      password: '',
      error: '',
      securityQuestion: '',
      securityAnswer: '',
      validEmail: false,
      validPassword: false,
      verifyPassword: false,
      validSecurityAnswer: false,
    })
  }

  renderError() {
    if(this.state.error) {
      return (
        <div>
          <h2>{this.state.error}</h2>
        </div>
      )
    }
  }

  renderSecurityDropDownList() {
    return (
      <div>
        <select ref='dropdown'>
          <option value="city">What city were you born in?</option>
          <option value="name">What is your mother's maiden name?</option>
          <option value="street">What street did you grow up on?</option>
          <option value="car">What is the make of your first car?</option>
        </select>
      </div>
    )
  }

  renderSecurityInput() {
    return (
      <div>
        <input type="password" placeholder={this.state.placeholderSecurity} onChange={this.handleInput} ref="securityQuestion"/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="signup-container">
          {this.renderSignUp()}
        </div>
      </div>
    )
  }
}
