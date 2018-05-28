import { createStore } from 'redux';

const defaultState = {
  value: 0,
  city: "Miami, FL"
}

const reducer = (state={}, action) => {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'NEW_CITY':
      return Object.assign({}, state, {city: action.city})
    case 'RECEIVE_WEATHER':
      return Object.assign({}, state, {loading:false, value: action.value})
    case 'WEATHER_LOADING':
        return Object.assign({}, state, {loading:true})
    default:
      return state;
  }
}

const store = createStore(reducer, defaultState)
export default store