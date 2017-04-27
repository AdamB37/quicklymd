import { React, Link } from 'globalImports'

export default class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      services :
        [
        'Birth Control',
        'Urinary Tract Infection',
        'Erectyle Disfunction',
        'Sinus Infection',
        'Acid Reflux',
        'Acne',
        'Flu',
        'Hair Loss'
        ]
    }
    this.renderServiceBox = this.renderServiceBox.bind(this)
  }
  renderServiceBox() {
    const Services = ({services}) => (
      <div>

        {services.map(service => (
          <button className="services-offered-button">
            {/* <Link to={`/service/${service}`}> TODO:add services links to separate pages*/}
            {service}
            {/* </Link> */}
          </button>
        ))}

      </div>
      )

    return (
      <Services services={this.state.services} />
    )
  }



  render() {
    return (
      <div className="services-offered-container">
        {this.renderServiceBox()}
      </div>
    )
  }
}
