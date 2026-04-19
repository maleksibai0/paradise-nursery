import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Handle increase quantity
  const handleIncreaseQuantity = (itemId) => {
    dispatch(cartActions.increaseQuantity(itemId));
  };

  // Handle decrease quantity
  const handleDecreaseQuantity = (itemId) => {
    dispatch(cartActions.decreaseQuantity(itemId));
  };

  // Handle remove item
  const handleRemoveItem = (itemId) => {
    dispatch(cartActions.removeFromCart(itemId));
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Coming Soon! Thank you for your order.');
    dispatch(cartActions.clearCart());
  };

  // Calculate individual item totals
  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="cart-title">🛒 Shopping Cart</h1>
        <div style={{ 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          borderRadius: '50%',
          minWidth: '40px',
          textAlign: 'center',
          fontSize: '1.2rem'
        }}>
          {totalQuantity}
        </div>
      </div>

      {cartItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ color: '#2c5f2d' }}>Your cart is empty</h2>
          <p style={{ color: '#666', marginBottom: '1.5rem' }}>
            Start shopping to add plants to your cart!
          </p>
          <button className="continue-shopping-btn">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* Cart Items Section */}
          <div style={{ flex: 1 }}>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-thumbnail"
                  />
                  <div className="item-details">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">
                      ${item.price} x {item.quantity} = ${calculateItemTotal(item.price, item.quantity)}
                    </div>
                  </div>
                  <div className="quantity-control">
                    <button
                      className="quantity-btn"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      −
                    </button>
                    <span style={{ minWidth: '30px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary">
            <h2 style={{ marginTop: 0, color: '#2c5f2d' }}>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Tax (10%):</span>
              <span>${(totalAmount * 0.1).toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>${(totalAmount * 1.1).toFixed(2)}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <button
              className="continue-shopping-btn"
              onClick={() => window.history.back()}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;