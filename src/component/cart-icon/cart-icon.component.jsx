
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import addItem from '../../redux/cart/cart.reducer'

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles.jsx';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
  addItem: () => dispatch(addItem())
});
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);