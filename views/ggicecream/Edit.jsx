const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {flavor, _id, description, image} = this.props.ggicecream
        return (
            <Default title={`${flavor} Edit Page`} ggicecream={this.props.ggicecream}>
                {/* <form method="POST" action={`/pokemon/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Image: <input type="text" name="image" placeholder={image}/><br />
                    <input type="submit" value="Edit Pokemon" />
                </form> */}
            </Default>
        )
    }
}

module.exports = Edit