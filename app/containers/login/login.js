import { React, Link } from 'globalImports'

const validEmailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
const validPasswordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholderEmail: 'Email',
      placeholderPassword: 'Password',
      email: '',
      validEmail: false,
      password: '',
      validPassword: false,
      error: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.renderSubmit = this.renderSubmit.bind(this)
    this.resetForm = this.resetForm.bind(this)
  }



  renderLogin() {
    return (
      <div className="login-render-container">
        <h1>Sign In</h1>
        {this.renderError()}
        <input type="text" placeholder={this.state.placeholderEmail} onChange={this.handleInput} ref="emailInput"/>
        <input type="password" placeholder={this.state.placeholderPassword} onChange={this.handleInput} ref="passwordInput"/>
        {this.renderSubmit()}
        <button className="reset-button" onClick={this.resetForm}>Reset</button>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
      </div>
    )
  }

  handleInput(event) {
    event.preventDefault()
    const validEmail = this.state.validEmail
    const validPassword = this.state.validPassword
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

        break;

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
        break;

      default:
        break;
      }
      // ajax call here????
      const error = 'Errrrrooooorrrrr' /// change this when db is created
      this.setState({
        error: 'Errrrrooooorrrrr'
      })
  }

  renderSubmit() {
    if(this.state.validPassword && this.state.validEmail) {
      return (
        <div>
          <button className='submit-button-valid'>Submit</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <button className='submit-button-invalid'>Submit</button>
        </div>
      )
    }
  }

  resetForm() {
    this.refs.emailInput.value = ''
    this.refs.passwordInput.value = ''
    this.setState({
      email: '',
      validEmail: false,
      password: '',
      validPassword: false,
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

  render() {
    return (
      <div>
        <div className="login-container">
          {this.renderLogin()}
        </div>
      </div>
    )
  }
}
