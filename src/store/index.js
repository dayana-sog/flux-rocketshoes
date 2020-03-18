import { createStore } from 'redux';

import reducer from './module/cart/reducer';

const store = createStore(reducer);

export default store;
