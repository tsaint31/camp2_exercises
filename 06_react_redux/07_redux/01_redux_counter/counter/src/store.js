import { createStore } from 'redux';

const initialstate={counter:10};

function updateCounter(state = initialstate, action) {
  switch (action.type) {
    case "INCREMENT":
      return  {
      ...state,
      counter: state.counter + 1
      };
    case "DECREMENT":
      return  {
        ...state,
        counter: state.counter - 1
    };
    default:
      return state
  }
}

let store = createStore(updateCounter);


export default store;
