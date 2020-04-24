export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCart = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd
  );

  if(existingCartItem) {
    return cartItems.map(cartItem => 
      cartItems.id === cartItemToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  return [...cartItem, {
    ...cartItemToAdd, 
    quantity: 1 }];
};