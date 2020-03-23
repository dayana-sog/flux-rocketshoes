export function AddToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id
  };
}

export function AddToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
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
