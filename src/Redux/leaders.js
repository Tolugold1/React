import * as ActionType from './ActionType';


export const Leaders = (state = 
  {leaderIsLoading: true, leaderErrMess: null, leaders: []}, action) => {

  switch (action.type) {
    case ActionType.LEADERS_LOADING:
      return {...state, leaderIsLoading: true, leaderErrMess: null, leaders: []};

    case ActionType.LEADERS_FAILED:
      return {...state, leaderIsLoading: false, leaderErrMess: action.payload};

    case ActionType.ADD_LEADERS:
      return {...state, leaderIsLoading : false, leaders: action.payload};

    default:
      return (state);
  }
}