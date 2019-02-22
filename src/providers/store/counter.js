const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = value => ({
  type: INCREMENT, value
});

export const decrement = value => ({
  type: DECREMENT, value
});

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + action.value;
    case DECREMENT: return state - action.value;
    default: return state;
  }
};
