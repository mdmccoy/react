import React from 'react'
import Temperature from './Temperature'

class TemperatureContainer extends React.Component{
    constructor(){
        super();
        this.state = {value:0}
    }

    componentDidMount() {
        fetch('/weather')
        .then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                this.setState({
                    value:jsonResponse["main"]["temp"],
                    unit:'F'
                })
            }
        )
    }
    
    render(){
        return(
            <Temperature temperature={this.state} />
        )
    }
}

export default TemperatureContainer