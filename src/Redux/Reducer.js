import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotion';
import { LEADERS } from '../shared/Leaders';

export const InitialState = {

  dishes: DISHES,
  leaders: LEADERS,
  promotion: PROMOTIONS,
  comments: COMMENTS
  
};

export const Reducer = (state = InitialState, action) => {
  return (state);
}