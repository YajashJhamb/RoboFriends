import { GET_ROBOTS, ADD_ROBOT } from "./types";
import axios from "axios";

export const getRobots = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  dispatch({
    type: GET_ROBOTS,
    payload: res.data
  });
};

// export const searchRobot = searchField => {
//   return {
//     type: SEARCH_ROBOT,
//     payload: searchField
//   };
// };

export const addRobot = robot => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    robot
  );

  dispatch({
    type: ADD_ROBOT,
    payload: res.data
  });
};
