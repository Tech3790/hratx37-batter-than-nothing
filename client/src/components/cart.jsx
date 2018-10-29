import React from 'react';
const axios = require('axios');

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customerName: ''
        }
        this.nameChanged = this.nameChanged.bind(this);
        this.placeOrder = this.placeOrder.bind(this);
    }
    placeOrder() {
        let body = {
            customerName: this.state.customerName,
            orderDetails: this.props.data
        }
        axios.post('http://localhost:3001/placeorder', body)
            this.props.handleRoute('orderplaced');
    }
    nameChanged(e) {
        this.setState({ customerName: e.target.value });
    }
    removeItem(){

    }
    render() {

        let collectionDonuts = [];
        let customDonuts = [];

        for (let i = 0; i < this.props.data.length; i++) {
            if (Object.keys(this.props.data[i]).length === 3) {
                collectionDonuts.push(this.props.data[i]);
            } else {
                customDonuts.push(this.props.data[i]);
            }

        }
        return (
            <div>
                <h2>your cart has the following items : </h2>
                <h3>donuts from our collection : </h3>

                <tbody>
                    {collectionDonuts.map((order, i) => (
                        <tr key={i}>
                            <td className="itemTd">Name: {order.name}</td>
                            <td className="itemTd">Quantity: {order.quantity}</td>
                            <td className="itemTd">Total: {order.total}</td>
                            <td className="itemTd"><input type="button" value="X" /></td>
                        </tr>
                    ))}
                </tbody>
                <h3>customized donuts : </h3>
                <tbody>
                    {customDonuts.map((order, i) => (
                        <tr key={i}>
                            <td className="itemTd"> Base : {order.base}</td>
                            <td className="itemTd"> Type : {order.type}</td>
                            <td className="itemTd"> Topping 1 : {order.topping1}</td>
                            <td className="itemTd"> Topping 2 : {order.topping2}</td>
                            <td className="itemTd"> Topping 3 : {order.topping3}</td>
                            <td className="itemTd"> Quantity : {order.quantity}</td>
                            <td className="itemTd"> Total : {order.total}</td>
                            <td className="itemTd"><input type="button" value="X" /></td>
                        </tr>
                    ))}
                </tbody>
                <p>your name : </p>
                <input type="text" placeholder="your name here .." onChange={this.nameChanged}/>
                <input type="button" value="Place Order" onClick={this.placeOrder} onChange={this.nameChanged} />
            </div>
        )
    }
}

export default Cart;