import { createSelector } from 'reselect';
const selectCart = state => state.cart;
export const SelectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems


);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
export const selectCartItemCount = createSelector(
    [SelectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )

);
export const selectCartTotal = createSelector(
    [SelectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0
        )

);