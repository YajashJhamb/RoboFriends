import { GET_ROBOTS, ADD_ROBOT } from "../actions/types";

const initialState = {
  robots: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROBOTS:
      return {
        ...state,
        robots: action.payload
      };
    case ADD_ROBOT:
      return {
        ...state,
        robots: [action.payload, ...state.robots]
      };
    default:
      return state;
  }
}
