const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {goobers} = this.props
        return(
            <Default title="Goofy Goober Ice Cream">
                <nav>
                    {/* <a href="/goober/flavors">Browse Our Flavors</a> */}
                </nav>
                <div className='flex-parent card-container'>
                    {
                        goobers.map((goober) => {
                            const {flavor, image} = goober
                            return (
                                <div className='card' key={goober._id}>
                                            <div><a className='card-title' href={`/goober/${goober._id}`}>
                                                {flavor}</a></div>


                                            <div><img className='card-img' src={`${image}`}></img></div>
 
                                    </div>

                            )
                        })
                    }
                </div>
            </Default>
        )
    }
}

module.exports = Index