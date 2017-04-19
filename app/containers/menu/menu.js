import { React } from 'globalImports'

export default class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      authed: true,
      services_clicked: false,
    }
    this.toggleServices = this.toggleServices.bind(this)
    this.renderServices = this.renderServices.bind(this)
    this.renderServicesMenu = this.renderServicesMenu.bind(this)
  }

  toggleServices() {
    let x = !this.state.services_clicked
    this.setState({
      services_clicked : x
    })
    console.log('toggle')
  }

  renderFAQ() {
    return (
      <div>
        <button className='secondary-buttons'>FAQ</button>
      </div>
    )
  }
  renderMedTeam() {
    return (
      <div>
        <button className='secondary-buttons'>Medical Team</button>
      </div>
    )
  }
  renderReviews() {
    return (
      <div>
        <button className='secondary-buttons'>Reviews</button>
      </div>
    )
  }
  renderHowItWorks() {
    return (
      <div>
        <button className='secondary-buttons'>How it works</button>
      </div>
    )
  }
  renderServices() {
    return (
      <div>
        <button className='secondary-buttons' onClick={this.toggleServices}>Services</button>
      </div>
    )
  }

  renderServicesMenu() {
    console.log('service-menu')
    if(this.state.services_clicked) {
      return (
        <div className='services-menu-container'>
          <button className='services-menu-button'>crazy pills</button>
          <button className='services-menu-button'>boner pills</button>
          <button className='services-menu-button'>rash pills</button>
          <button className='services-menu-button'>limitless pills</button>
        </div>
      )
    }
  }
  renderContact() {
    return (
      <div>
        <button className='contact-button secondary-buttons'>Contact</button>
      </div>
    )
  }

  renderAuthButtons(){
    if(this.state.authed){
      return <div>
        <button className='auth-button primary-buttons'>Login</button>
      </div>
    }
    else{
      return <div>
        <button className='auth-button primary-buttons'>Logout</button>
      </div>
    }
  }

  renderStartButton() {
    return (
      <div>
        <button className='start-button primary-buttons'>Start Visit</button>
      </div>
    )
  }

  renderLogo() {
    return (
      <div>
        <div>Q/md Logo</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className='menu-container'>
          <div className='secondary-container'>
            <div className='logo'>
              {this.renderLogo()}
            </div>
            <div className='nested-secondary'>
              {this.renderFAQ()}
              {this.renderMedTeam()}
              {this.renderReviews()}
              {this.renderHowItWorks()}
              {this.renderServices()}
              {this.renderContact()}
            </div>
          </div>
          <div className='primary-container'>
            {this.renderAuthButtons()}
            {this.renderStartButton()}
          </div>
        </div>
        <div>
          {this.renderServicesMenu()}
        </div>
      </div>
    )
  }
}
