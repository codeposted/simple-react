import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_START,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAIL
} from './actionTypes';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobot = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOT_START});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({type: REQUEST_ROBOT_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOT_FAIL, payload: error}))
}