import React from 'react';
import './Temperature.css'

var Temperature = (props) => {
    return (
            <div>
                 <form onSubmit={event => props.onSubmit(event,props.city)}>
                     <label htmlFor="city">City:</label>
                     <input type="text" id="city" onChange={props.onChange} value= {props.city} placeholder="Miami" />
                     <input type="submit" value="Submit" />
                 </form>
            

                 <span className="temperature">
                 {props.loading ? "loading..." : props.value}
                 </span>
             </div>
    )
}

export default Temperature;

