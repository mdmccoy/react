import React from 'react'
import Temperature from './Temperature'

class TemperatureContainer extends React.Component{
    constructor(){
        super();
        this.state = {temperature: {value:80, unit: 'F'}}
    }

    render(){
        return(
            <Temperature temperature={this.state.temperature} />
        )
    }
}

export default TemperatureContainer