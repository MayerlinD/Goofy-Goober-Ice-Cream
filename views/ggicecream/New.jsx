const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
    render(){
        return (
            <Default title="Create A New Flavor">
            <form method="POST" action="/ggicecream">
                Flavor: <input type="text" name="flavor" placeholder='Name of Ice Cream Here'></input><br/>
                Description: <input type="text" name="desciption" placeholder='Description of Ice Cream Here'></input><br/>
                Image: <input type="text" name="image" placeholder="image"/><br />
                <input type="submit" value="Submit Ice Cream"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New