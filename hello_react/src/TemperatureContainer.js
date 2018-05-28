import Temperature from './Temperature'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return{
        value: state.value,
        city: state.city,
        loading: state.loading
    }
}

const updateWeather = (city, dispatch) => {
    console.log(`weather for ${city}`)

    dispatch({
        type:'WEATHER_LOADING'
    })

    fetch(`/weather?city=${city}`)
    .then(response => response.json())
    .then(
      (jsonResponse) => {
        // dispatch a RECEIVE_WEATHER action
        const missing = jsonResponse['cod'] === "404"
            console.log('shits fucked yo')
        dispatch({
          type: 'RECEIVE_WEATHER',
          value: missing ? "SHITS FUCKED YO" : jsonResponse["main"]["temp"]
        })
      }
    )
  }

const handleChange = (event,dispatch) => {
    dispatch({
        type: 'NEW_CITY',
        city: event.target.value
    })
}

const handleSubmit = (event,city,dispatch) => {
    event.preventDefault()
    updateWeather(city,dispatch)
    // console.log('submit',this.state.city);        
}

const mapDispatchToProps = dispatch => {
    return {
      onChange: (event) => handleChange(event, dispatch),
      onSubmit: (event, city) => handleSubmit(event,city,dispatch)
    }
  }

const TemperatureContainer = connect(
    mapStateToProps,mapDispatchToProps
)(Temperature)
    
export default TemperatureContainer