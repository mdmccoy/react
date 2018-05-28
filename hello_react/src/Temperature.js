import React from 'react';
import './Temperature.css'



// class Temperature extends React.Component{
//     render(){
//         return(
//             <span className="temperature">
//             {this.props.value}
//             </span>
//         )
//     }
// }

var Temperature = (props) => {
    return (
        <span className="temperature">
        {props.temperature.value}{props.temperature.unit}
        </span>
    )
}

export default Temperature;

