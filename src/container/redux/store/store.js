import { createStore, applyMiddleware, combineReducers } from "redux"
import Logger  from "redux-logger"
import  thunk  from 'redux-thunk'
import photoReducer from "../reducer/reducer";

// const rootReducer = combineReducers({
//     photo: photoReducer
// })
const store = createStore(photoReducer, applyMiddleware(
    Logger, thunk
))

export default store