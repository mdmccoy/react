class Temperature extends React.Component {
    render(){
        return React.createElement(
            'span',
            {style: {'fontSize': '30pt', 'color':this.props.color}},
            `${this.props.value}°`)
    }
}

class Description extends React.Component {
    render(){
        return React.createElement(
            'div',
            {style: {}},
            `${this.props.value}`

        )
    }
}

class Date extends React.Component{
    render(){
        return React.createElement(
            'div',
            null,
            `${this.props.value}`
        )
    }
}

//render temp component
let what = React.createElement(Temperature, {value: 80,color: '#ff0000'})
let where = document.getElementById('temperature')

//render Desc component
let what2 = React.createElement(Description, {value:'Partly cloudy'})
let where2 =  document.getElementById('description')

//render Date component
let what3 = React.createElement(Date, {value: `May 26th`})
let where3 = document.getElementById('date')

ReactDOM.render(what,where)
ReactDOM.render(what2,where2)
ReactDOM.render(what3,where3)



