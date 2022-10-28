const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {image, flavor, description, _id} = this.props.ggicecream
        const capName = flavor[0].toUpperCase() + flavor.substring(1)
        return(
        <Default title={`${capName} Show Page`} ggicecream={this.props.ggicecream}>
            <img src={`${image}`}/>
            <p>{capName} is {description}</p><br />
            
        </Default>
        )
   } 
}

module.exports = Show