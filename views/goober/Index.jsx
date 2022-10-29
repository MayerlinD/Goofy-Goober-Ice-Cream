const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {goobers} = this.props
        return(
            <Default title="Goober Index Page">
                <nav>
                    {/* <a href="/goober/flavors">Browse Our Flavors</a> */}
                </nav>
                <ul>
                    {
                        goobers.map((goober) => {
                            const {flavor, description, image} = goober
                            return (
                                <li key={goober._id}>
                                    <a href={`/goober/${goober._id}`}>
                                    {flavor}</a> is {description}
                                    
                                     <br/>
        
                                        <img src={`${image}`}></img>>
                                    
                                    <br/>
                                    <form method="POST" action={`/goober/${goober._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${description} ${flavor}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index