import React from 'react';
import { useHistory } from 'react-router-dom';

const CartItem = ({ cartItems }) => {
    const history = useHistory();

    const calculateTotal = () => {
        const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * 0.1; // Assuming a tax rate of 10%
        const shipping = 5.00; // Flat shipping fee
        const total = subtotal + tax + shipping;

        return { subtotal, tax, shipping, total };
    };

    const { subtotal, tax, shipping, total } = calculateTotal();

    return (
        <div>
            <h2>Your Cart</h2>
            {/* Cart items rendering logic goes here */}
            <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3>Tax: ${tax.toFixed(2)}</h3>
            <h3>Shipping: ${shipping.toFixed(2)}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => history.push('/products')}>Continue Shopping</button>
        </div>
    );
};

export default CartItem;