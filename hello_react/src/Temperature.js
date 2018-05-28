import React from 'react';
import './Temperature.css'



// class Temperature extends React.Component{
//     // constructor(){
//     //     super()
//     //     this.state =  {city: 'Delray Beach, FL'}
//     // }



//     render(){
//         return(
//             <div>
//                 <form onSubmit={this.props.onSubmit}>
//                     <label htmlFor="city">City:</label>
//                     <input type="text" id="city" onChange={this.props.onChange} placeholder="Delray Beach, FL" />
//                     <input type="submit" value="Submit" />
//                 </form>
            

//                 <span className="temperature">
//                 {this.props.value}
//                 </span>
//             </div>
//         )
//     }
// }

var Temperature = (props) => {
    return (
            <div>
                 <form onSubmit={props.onSubmit}>
                     <label htmlFor="city">City:</label>
                     <input type="text" id="city" onChange={props.onChange} placeholder="Delray Beach, FL" />
                     <input type="submit" value="Submit" />
                 </form>
            

                 <span className="temperature">
                 {props.value}{props.unit}
                 </span>
             </div>
    )
}

export default Temperature;

