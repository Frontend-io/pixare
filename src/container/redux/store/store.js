import { applyMiddleware } from "redux"
import { Logger } from "redux-logger"
import  thunk  from 'redux-thunk'
import { createStore } from 'redux'
import photoReducer from "../reducer/reducer";

const store = createStore(photoReducer, applyMiddleware({
    Logger, thunk
}))

export default store