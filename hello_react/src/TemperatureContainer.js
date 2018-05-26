import React from 'react'
import Temperature from './Temperature'

class TemperatureContainer extends React.Component{
    constructor(){
        super();
        this.state = {value:80}
    }

    render(){
        return(
            <Temperature value={this.state.value} />
        )
    }
}

export default TemperatureContainer