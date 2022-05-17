import { createStore } from "redux";
import { Reducer, InitialState } from './Reducer'

export const ConfigureStore = () => {
  
  const store = createStore(
    Reducer, InitialState
  )

  return (store);
};