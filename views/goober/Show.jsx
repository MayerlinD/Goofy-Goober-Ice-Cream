const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {flavor, image, _id} = this.props.goober
        const capName = flavor[0].toUpperCase() + flavor.substring(1)
        return(
        <Default title={`${capName} Show Page`} goober={this.props.goober}>
            <p>{capName}</p><br />
            <img src={`${image}`}/>
        </Default>
        )
   } 
}

module.exports = Show