import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_START,
    REQUEST_ROBOT_SUCCESS,
    REQUEST_ROBOT_FAIL
} from './actionTypes';

const initialStateSearch = {
    searchField: ''
}

export const searchRobot = (state = initialStateSearch,  action) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobotReducer = (state = initialStateRobots, action) =>{
    switch(action.type){
        case REQUEST_ROBOT_START:
            return {...state, isPending: true}
        case REQUEST_ROBOT_SUCCESS:
            return {...state, isPending: false, robots: action.payload}
        case REQUEST_ROBOT_FAIL:
            return {...state, isPending: false, error: action.payload};
        default:
            return state;
    }
}