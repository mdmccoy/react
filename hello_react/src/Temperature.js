import React from 'react';
import './Temperature.css'



class Temperature extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {value:80}
    // }

    render(){
        return(
            <span className="temperature">
            {this.props.value}
            </span>
        )
    }
}

export default Temperature;