import React from 'react';

class Donuts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        this.setState({ quantity: event.target.value })
    }
    render() {
        return (
            this.props.donuts.map((donut, i) => (
                <div key={i} className="donutContainer">
                    <img className="donutImage" src={donut.image} alt="donut is missing" />
                    <p>{donut.name}</p>
                    <p>${donut.price}</p>
                    <p>Quantity :</p>
                    <input type="text" placeholder="how many ?" onChange={this.onChange} />
                    <input type="button" onClick={() => this.props.handleClick(donut.name, this.state.quantity, donut.price)} value="Add to cart"></input>
                </div>
            ))
        )
    }
}

export default Donuts;