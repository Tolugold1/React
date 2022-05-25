import * as ActionType from './ActionType';
import { DISHES } from '../shared/dishes'

export const Add_Comment = (DishId, rating, author, comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    DishId: DishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES))
  }, 2000)
}

export const dishesLoading = () => ({
  type: ActionType.DISHES_LOADING
})

export const dishesFailed = (errmess) => ({
  type: ActionType.DISHES_FAILED,
  payload: errmess
})

export const addDishes = (dishes) => ({
  type: ActionType.ADD_DISHES,
  payload: dishes
})