const React = require('react');
const Default = require('../layouts/Default.jsx')

class Home extends React.Component{
    render(){
        const {goobers} = this.props
        return(
            <Default title="Goober Index Page">
                <nav>
                    {/* <a href="/goober/flavors">Browse Our Flavors</a> */}
                </nav>
            </Default>
        )
    }
}

module.exports = Home