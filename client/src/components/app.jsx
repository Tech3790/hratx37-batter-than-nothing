import React from 'react';
import ReactDOM from 'react-dom';
import Donuts from './donuts.jsx';
import Home from './home.jsx';
import Customize from './customize.jsx';
import Cart from './cart.jsx';
import OrderPlaced from './orderPlaced.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            donuts: [],
            page: 'home',
            items: 0,
            orderItems: [],

        };

        this.handleOrderClick = this.handleOrderClick.bind(this);
        this.handleRoute = this.handleRoute.bind(this);
        this.addCustomDonutToCart = this.addCustomDonutToCart.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(results => {
                this.setState({ donuts: results })
            });
    }
    homeClick(el) {
        el.click();
    }
    handleOrderClick(donutName, quantity, price) {
        let orderItem = {
            name: donutName,
            quantity: quantity,
            total: quantity * price
        }
        this.setState({ cart: this.state.cart.concat([orderItem]) })
    }
    addCustomDonutToCart(order) {
        let orderItem = {
            base: order.base,
            type: order.type,
            topping1: order.topping1,
            topping2: order.topping2,
            topping3: order.topping3,
            quantity: order.quantity,
            total: order.total
        }
        this.setState({ cart: this.state.cart.concat([orderItem]) })
    }
    handleRoute(clickedRoute = 'home') {

        switch (clickedRoute) {
            case 'donuts':
                this.setState({ page: <Donuts donuts={this.state.donuts} handleClick={this.handleOrderClick} /> })
                break;
            case 'customize':
                this.setState({ page: <Customize handleClick={this.addCustomDonutToCart} /> })
                break;
            case 'cart':
                this.setState({ page: <Cart data={this.state.cart} handleRoute={this.handleRoute}/> })
                break;
            case 'orderplaced':
                this.setState({ page: <OrderPlaced /> })
                break;
            default:
                this.setState({ page: <Home handleRoute={this.handleRoute} /> })
                break;
        }
    }
    render() {
        return (
            <div>
                <h1>Donut Shop</h1>
                <nav className="navLinks">
                    <a className="navLink" href='#' ref={this.homeClick} onClick={() => this.handleRoute('home')}>Home</a>
                    <a className="navLink" href='#' onClick={() => this.handleRoute('donuts')}>Donuts</a>
                    <a className="navLink" href='#' onClick={() => this.handleRoute('customize')}>Customize</a>
                    <a className="navLink" href='#' onClick={() => this.handleRoute('cart')}>Cart: {this.state.cart.length}</a>
                </nav>
                <div>
                    {this.state.page}
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));