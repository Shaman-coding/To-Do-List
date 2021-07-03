import RedusersTusk from "../redusers/redusersTusk";
import {combineReducers, createStore, applyMiddleware} from "redux";




let redusers = combineReducers({
    tuskPage: RedusersTusk
});
let store = createStore(redusers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;