import { combineReducers } from 'redux';

import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

const stack = (state = {}, action) => {

    let { stack } = action;

    switch(action.type) {
        case SET_STACK:
            return stack
        default:
            return state;
    }
}

const stacks = (state = [], action) => {

    let { stacks, stack } = action;

    switch(action.type) {
        case LOAD_STACKS:
            return stacks;
        case ADD_STACK:
            return [...state, {...stack, id: state.length}]
        default:
            return state;
    }
}

export default combineReducers({stack, stacks});