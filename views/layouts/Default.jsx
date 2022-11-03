const React = require('react');

class Default extends React.Component {
    render(){
        const {goober, title} = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href="/app.css"></link>
                    <title>{title}</title>
                </head>
                <body>
                    <nav className='nav'>
                        <a href="/goober">Home Page</a><br></br>
                        <a href="/goober/flavors">Browse Our Flavors</a>
                        {/* <a href="/goober/new">Create a New Goober</a><br></br> */}
                        {/* { goober? <a href={`/goober/${goober._id}/edit`}> {goober.name} Edit Page </a> : ''}<br></br>
                        { goober? <a href={`/goober/${goober._id}`}>{goober.name} Show Page</a> : ''}<br></br> */}
                    </nav>
                    <h1>
                        {title}
                    </h1>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default