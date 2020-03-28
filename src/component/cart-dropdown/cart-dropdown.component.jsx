import React from 'react';
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux';
import { SelectCartItems} from '../../redux/cart/cart.selector'
const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }

             </div>
        <CustomButton> GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems :SelectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);