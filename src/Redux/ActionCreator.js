import * as ActionType from './ActionType';
import { baseUrl } from '../shared/baseUrl';

export const Add_Comment = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: comment
});

export const postComment = (DishId, rating, author, comment) => async (dispatch) => {
  const newComment = {
    DishId: DishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "content-type" : "application/json"
    },
    credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return (response)
    } else {
      var error = new Error('Error' + response.status + ':' + response.statusText)
      error.response = response;
      throw error
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .then(comment => dispatch(Add_Comment(comment)))
  .catch(error => {console.log('Post comment', error.message); alert('Your comment could not be posted\nError:' + error.message)})
}

export const fetchDishes = () => async (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
  .then(response => {
    if (response.ok) {
      return (response)
    } else {
      var error = new Error('Error' + response.status + ':' + response.statusText)
      error.response = response;
      throw error
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .then(dishes => {dispatch(addDishes(dishes))})
  .catch(error => {dispatch(dishesFailed(error.message))})
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
  .then(response => {
    if (response.ok) {
      return (response)
    } else {
      var error = new Error('Error' + response.status + ':' + response.statusText)
      error.response = response;
      throw error
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .then(promotions => {dispatch(add_promotion(promotions))})
  .catch(error => {dispatch(promotionFailed(error.message))})
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
  .then(response => {
    if (response.ok) {
      return (response)
    } else {
      var error = new Error('Error' + response.status + ':' + response.statusText)
      error.response = response;
      throw error
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .then(comments => {dispatch(AddComments(comments))})
  .catch(error => {dispatch(comment_failed(error.message))})
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
  .then(response => {
    if (response.ok) {
      return (response)
    } else {
      var error = new Error('Error' + response.status + ':' + response.statusText)
      error.response = response;
      throw error
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .then(leaders => {dispatch(addLeaders(leaders))})
  .catch(error => {dispatch(leadersFailed(error.message))})
}

export const LeadersLoading = () => ({
  type: ActionType.LEADERS_LOADING
})

export const leadersFailed = (errMess) => ({
  type: ActionType.LEADERS_FAILED,
  payload: errMess
})

export const addLeaders = (leaders) => ({
  type: ActionType.ADD_LEADERS,
  payload: leaders
})

//post feedback

export const sendFeedback = (firstName, lastName, telnum, email, agree, contactType, messages) => async (dispatch) => {
  const feeds = {
    firstName: firstName,
    lastName: lastName,
    telnum: telnum,
    email: email,
    agree: agree,
    contactType: contactType,
    messages: messages
  }
  return fetch(baseUrl + 'feedback', {
    method: "POST",
    body: JSON.stringify(feeds),
    headers: {
      "content-type" : "application/json"
    },
    credentials: "same-origin"
  })
  .then(response => {
    if (response.ok) {
      return (response);
    } else {
      var error = new Error("Error" + error.status + ':' + error.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
    var errMess = new Error(error.message);
    throw errMess;
  }
  )
  .then(response => response.json())
  .catch(error => {console.log("Unable to post feedback", error.message); alert("Unable to post feedback: " + error.message)})
}