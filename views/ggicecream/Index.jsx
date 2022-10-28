const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {ggicecreams} = this.props
        return(
            <Default title="Goofy Goober Ice Cream">
                {/* <nav> */}
                    {/* <a href="/pokemon/new">Create a New Pokemon</a>
                </nav> */}
                <ul>
                    {
                        ggicecreams.map((ggicecream) => {
                            const {flavor, description, image} = ggicecream
                            return (
                                <li key={ggicecream._id}>
                                    <img src={`${image}`}></img>>

                                    <a href={`/ggicecream/${ggicecream._id}`}>
                                    {flavor}</a> is {description}
                                    
                                     <br/>
        
                                     <a href={`/ggicecream/${ggicecream._id}`}>
                                    {flavor}</a> is {description}
                                    
                                    <br/>
                                    {/* <form method="POST" action={`/ggicecream/${ggicecream._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${color} ${name}`}/>
                                    </form> */}
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