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

export function UpdateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount
  };
}

export function UpdateAmountSucess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount
  };
}
