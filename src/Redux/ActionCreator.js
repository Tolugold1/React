import * as ActionType from './ActionType';
import { baseUrl } from '../shared/baseUrl';

export const Add_Comment = (DishId, rating, author, comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    DishId: DishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchDishes = () => async (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
  .then(response => response.json())
  .then(dishes => {dispatch(addDishes(dishes))})
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

export const fetchPromotion = ()  => async (dispatch) => {
  dispatch(promotionLoading(true));

  return fetch(baseUrl + 'promotions')
  .then(response => response.json())
  .then(promotions => {dispatch(add_promotion(promotions))})
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

export const fetchComments = ()  => async (dispatch) => {

  return fetch(baseUrl + 'comments')
  .then(response => response.json())
  .then(comments => {dispatch(AddComments(comments))})
}

export const comment_failed = (errMess) => ({
  type: ActionType.COMMENTS_FAILED,
  payload: errMess
})

export const AddComments = (comment) => ({
  type: ActionType.ADD_COMMENTS,
  payload: comment
})


export const fetchLeaders = () => async (dispatch) => {
  dispatch(LeadersLoading(true));

  return fetch(baseUrl + 'leaders')
  .then(response => response.json())
  .then(leaders => {dispatch(addLeaders(leaders))})
}

export const LeadersLoading = () => ({
  type: ActionType.LEADERS_LOADING
})

export const leadersFailed = (errmess) => ({
  type: ActionType.LEADERS_FAILED,
  payload: errmess
})

export const addLeaders = (leaders) => ({
  type: ActionType.ADD_LEADERS,
  payload: leaders
})