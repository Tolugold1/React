import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from 'react-redux-form';
import { InitialFormState } from './form';
import { Dishes } from './dishes'
import { comments } from './comments';
import { promotion } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: comments,
      promotion: promotion,
      leaders: Leaders,
      ...createForms({
        Feedback: InitialFormState
      })
    }),
    applyMiddleware(thunk, logger)
  )
  return (store);
};