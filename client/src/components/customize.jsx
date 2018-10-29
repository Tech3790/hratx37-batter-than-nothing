import React from 'react';

class Customize extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toppings: [],
            types: [],
            bases: [],

            toppingsCount: ['1'],

            //custom donut

            base: 'cake',
            type: 'glazed',
            topping1: 'none',
            topping2: 'none',
            topping3: 'none',
            quantity: 0,
            total: 2
        }
        this.baseChanged = this.baseChanged.bind(this);
        this.typeChanged = this.typeChanged.bind(this);
        this.topping1Changed = this.topping1Changed.bind(this);
        this.topping2Changed = this.topping2Changed.bind(this);
        this.topping3Changed = this.topping3Changed.bind(this);
        this.quantityChanged = this.quantityChanged.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3001/toppings')
            .then(res => res.json())
            .then(data => {
                let array = []
                for (const value of data) {
                    array.push(value);
                }
                this.setState({ toppings: array })
            });
        fetch('http://localhost:3001/bases')
            .then(res => res.json())
            .then(data => {
                let array2 = []
                for (const value of data) {
                    array2.push(value);
                }
                this.setState({ bases: array2 })
            });
        fetch('http://localhost:3001/types')
            .then(res => res.json())
            .then(data => {
                let array3 = []
                for (const value of data) {
                    array3.push(value);
                }
                this.setState({ types: array3 })
            });
    }
    getTotalAfterToppings() {
        return 2 + this.getToppingPrice(this.state.topping1) + this.getToppingPrice(this.state.topping2) + this.getToppingPrice(this.state.topping3);
    }
    baseChanged(e) {
        this.state.base = e.target.value;
    }
    typeChanged(e) {
        this.state.type = e.target.value;
    }
    topping1Changed(e) {
        this.setState({ topping1: e.target.value }, () => {
            this.setState({ total: this.getTotalAfterToppings() });
        });
    }
    topping2Changed(e) {
        this.setState({ topping2: e.target.value }, () => {
            this.setState({ total: this.getTotalAfterToppings() });
        });
    }
    topping3Changed(e) {
        this.setState({ topping3: e.target.value }, () => {
            this.setState({ total: this.getTotalAfterToppings() });
        });
    }
    quantityChanged(e) {
        this.setState({ quantity: e.target.value });
        this.setState({ total: e.target.value * this.getTotalAfterToppings() });
    }
    getToppingPrice(toppingName) {
        for (const toppingObject of this.state.toppings) {
            if (toppingObject.name === toppingName) {
                return toppingObject.price;
            }
        }
        return 0;
    }
    render() {
        return (
            <div>
                <h3>Create a custom donut</h3>
                <p>starting at $2.00</p>
                <p>Donut Base</p>
                <select onChange={this.baseChanged}>
                    {this.state.bases.map(base =>
                        <option>{base.name}</option>
                    )}
                </select>
                <p>Donut Type</p>
                <select onChange={this.typeChanged}>
                    {this.state.types.map(type =>
                        <option>{type.name}</option>
                    )}
                </select>
                <p>Toppings 1 :</p>
                <select onChange={this.topping1Changed}>
                    <option value="none" selected="select">choose a topping ..</option>
                    {this.state.toppings.map(topping =>
                        <option>{topping.name}</option>
                    )}
                </select>
                <p>Toppings 2 :</p>
                <select onChange={this.topping2Changed}>
                    <option value="none" selected="select">choose a topping ..</option>
                    {this.state.toppings.map(topping =>
                        <option>{topping.name}</option>
                    )}
                </select>
                <p>Toppings 3 :</p>
                <select onChange={this.topping3Changed}>
                    <option value="none" selected="select">choose a topping ..</option>
                    {this.state.toppings.map(topping =>
                        <option>{topping.name}</option>
                    )}
                </select>
                <p>Quantity: </p>
                <input type="text" placeholder="How many?" onChange={this.quantityChanged} />
                <input type="button" value="add to cart" onClick={() => this.props.handleClick(this.state)} />
                <p>Your total is : ${this.state.total}</p>
            </div>
        )
    }
}

export default Customize;