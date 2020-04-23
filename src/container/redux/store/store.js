import { createStore, applyMiddleware, combineReducers } from "redux"
import Logger  from "redux-logger"
import  thunk  from 'redux-thunk'
import photoReducer from "../reducer/reducer";
import SearchReducer from "../reducer/searchReducer";

const rootReducer = combineReducers({
    photo: photoReducer,
    search: SearchReducer
})
const store = createStore( rootReducer , applyMiddleware(
    Logger, thunk
))

export default store