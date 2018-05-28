import React from 'react'
import Temperature from './Temperature'

class TemperatureContainer extends React.Component{
    constructor(){
        super();
        this.state = {value:0, city: "Delray Berach, FL"}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.updateWeather()        
    }

    updateWeather(){
        console.log(`weather for ${this.state.city}`);
        fetch(`/weather?city=${this.state.city}`)
        .then(response => response.json())
        .then(
            (jsonResponse) => {
                this.setState({
                    value:jsonResponse["main"]["temp"]                    
                })
            }
        )        
    }


    handleChange(event){
        this.setState({
            city: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.updateWeather();
        // console.log('submit',this.state.city);        
    }
    
    render(){
        return(
            <Temperature value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        )
    }
}

export default TemperatureContainer