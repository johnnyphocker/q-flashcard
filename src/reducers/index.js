import { SET_STACK } from '../actions';

const stack = (state = {}, action) => {

    let { stack } = action;

    switch(action.type) {
        case SET_STACK:
            return stack
        default:
            return state;
    }
}