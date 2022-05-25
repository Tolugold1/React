import * as ActionType from './ActionType';

export const promotion = (state = {promoIsLoading : true, promoErrMess: null, promotion: []}, action) => {
  switch (action.type) {

    case ActionType.DISHES_LOADING:
      return {...state, promoIsLoading : true, promoErrMess: null, promotion: []};

    case ActionType.PROMOTION_FAILED:
      return {...state, promoIsLoading : false, promoErrMess: action.payload};

    case ActionType.ADD_PROMOTION:
      return {...state, promoIsLoading : false, promotion: action.payload};

    default:
      return (state);
  }
}