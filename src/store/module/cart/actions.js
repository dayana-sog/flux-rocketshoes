export function AddToCart(product) {
  return {
    type: '@cart/ADD',
    product
  };
}

export function RemoveFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id
  };
}

export function UpdateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  };
}
