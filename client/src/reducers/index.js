import {combineReducers} from 'redux';
import posts from './posts'

/* Combines multiple reducer into one reducer as,
    createStore only takes one reducer
    each reducter is meant as each own state
*/
export default combineReducers({
    posts,
})