import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';
import { SelectCartItems } from '../../redux/cart/cart.selector'
import { withRouter } from 'react-router-dom'
const CartDropdown = ({ cartItems, history }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                (cartItems.length) ? (


                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) :
                    (<span className="empty-message">Your Cart is empty</span>)
            }

        </div>
        <CustomButton onClick={() => history.push('/checkout')}> GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: SelectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));