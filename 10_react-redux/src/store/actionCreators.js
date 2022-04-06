import { ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER } from './constants';

const incAction = () => ({
  type: INCREMENT,
});

const decAction = () => ({
  type: DECREMENT,
});

const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export { incAction, decAction, addAction, subAction };
