import { productDb } from 'utils/firebase';

const productActions = {
  START_CREATE: 'START_CREATE',
  END_CREATE: 'END_CREATE',

  createProduct: (name, description, price) => dispatch => {
    dispatch({ type: productActions.START_CREATE });
    productDb
      .doc()
      .set({ name, description, price })
      .then(() => {
        dispatch({ type: productActions.END_CREATE });
      });
  },
};

export default productActions;
