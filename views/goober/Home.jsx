const React = require('react');
const Default = require('../layouts/Default.jsx')

class Home extends React.Component{
    render(){
        const {goobers} = this.props
        return(
            <Default title="Goofy Goober Ice Cream">
                <nav>
                    {/* <a href="/goober/flavors">Browse Our Flavors</a> */}
                </nav>
                <div className='home'>
                    <img src='https://mystickermania.com/cdn/stickers/spongebob/spongebob-eating-ice-cream-512x512.png'></img>
                    <h2>Goofy Goofy Goober Goober YEAH!</h2>
                    <p>
                        Welcome to Goofy Goober, home of the Triple Gooberberry Sundae!
                        Here we believe that F is not only for firends who do stuff together, but its also for the best fudging ice cream in all of Bikini Bottom! Whether you're having a crummy day or just want to keep the good times rolling, our wide array of creamy and delicious flavors are sure to have you absolutely goofy with cheer!
                        If you are an ice cream aficionado with a hankering for euphoria, come by and become part of the goofy goober family!
                    </p>
                </div>
            </Default>
        )
    }
}

module.exports = Home