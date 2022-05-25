import * as ActionType from './ActionType';

export const Comments = (state = {commentErrMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionType.COMMENTS_FAILED:
            return {...state, commentErrMess: action.payload, comments: []};

        case ActionType.ADD_COMMENTS:
            return {...state, commentErrMess : null, comments: action.payload};

        case ActionType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return {...state, comments: state.comments.concat(comment)};

        default:
          return (state);
      }
};
