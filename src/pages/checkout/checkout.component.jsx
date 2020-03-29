import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectCartItems } from '../../redux/cart/cart.selector.js'
import { selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'
const CheckOutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className='header-block'><span>Product</span></div>
            <div className='header-block'><span>Description</span></div>
            <div className='header-block'><span>Quantity</span></div>
            <div className='header-block'><span>Price</span></div>
            <div className='header-block'><span>Remove</span></div>

        </div>
        {cartItems.map(cartItem =>
            (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)

        )}
        <div className="total">
            <span> TOTAL : ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: SelectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);