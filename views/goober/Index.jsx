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
                <ul>
                    {
                        goobers.map((goober) => {
                            const {flavor, image} = goober
                            return (
                                <div className='flex-parent card-container'>
                                    <div className='ice-cream-card flex-items inner-flex-parent'>
                                        <li className='card-name' key={goober._id}>
                                            <a className='card-title' href={`/goober/${goober._id}`}>
                                                {flavor}</a>

                                            <br />

                                            <img className='card-img' src={`${image}`}></img>

                                            <br />
                                        </li>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index