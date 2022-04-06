import { ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER } from './constants.js';

// export function addAction(num) {
//   return {
//     type: "ADD_NUMBER",
//     num,
//   }
// }

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subACtion = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction =  () => ({
  type: INCREMENT,
})

export const decAction =  () => ({
  type: DECREMENT,
})