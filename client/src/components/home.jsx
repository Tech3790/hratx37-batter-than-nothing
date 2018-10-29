import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="homeDiv">
                <div className="imageDiv">
                    <img className="bannerImage" src="https://www.lucidgames.co.uk/wp-content/uploads/2015/06/donutbanner1-1000x300.png" alt="" />
                </div>
                <div className="bothDiv">
                    <div className="orderContainer">
                        <img src="https://dpegb9ebondhq.cloudfront.net/product_photos/52769192/236-Donuts_Single_Front_40348119-3cf1-4119-93fc-42f045c312b5_200w.png" alt="" />
                        <p>see our collection of donuts</p>
                        <input type="button" value="Get Started" onClick={() => this.props.handleRoute('donuts')} />
                    </div>
                    <div className="orderContainer">
                        <img src="http://www.otisspunkmeyer.eu/assets/Uploads/_resampled/productthumb-3Raspberry-Filled-Donut.png" alt="" />
                        <p>create your own donut</p>
                        <input type="button" value="Get Started" onClick={() => this.props.handleRoute('customize')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;