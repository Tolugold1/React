import * as ActionType from './ActionType';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/Promotion'

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

export const fetchPromotion = ()  => (dispatch) => {
  dispatch(promotionLoading(true));

  setTimeout(() => {
    dispatch(add_promotion(PROMOTIONS))
  },2000)
}

export const promotionLoading = () => ({
  type: ActionType.PROMOTION_LOADING
})

export const promotionFailed = (errMess) => ({
  type: ActionType.PROMOTION_FAILED,
  payload: errMess
})

export const add_promotion = (promotion) => ({
  type: ActionType.ADD_PROMOTION,
  payload: promotion
})