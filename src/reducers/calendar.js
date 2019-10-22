import { SET_REGION } from 'constants/calendar';
import initialState from 'initialStates/calendar';
import { getItem } from 'utils/localStorage';

const calendar = (state = getItem('calendar', initialState), action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        regionNA: action.regionNA,
      };
    default:
      return state;
  }
};

export default calendar;