const React = require('react')
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {flavor, _id, image} = this.props.goober
        return (
            <Default title={`${flavor} Edit Page`} goober={this.props.goober}>
                <form method="POST" action={`/goober/${_id}?_method=PUT`}>
                    Flavor: <input type="text" name="flavor" defaultValue={flavor}></input><br/>
                    {/* Description: <input type="text" name="description" defaultValue={description}></input><br /> */}
                    Image: <input type="text" name="image" placeholder={image}/><br />
                    <input type="submit" value="Edit Goober" />
                </form>
                <form method="POST" action={`/goober/${_id}?_method=DELETE`}>
                    <input type="submit" value={`Delete ${flavor}`} />
                </form>
            </Default>
        )
    }
}

module.exports = Edit