import { combineReducers } from "redux";
import { commentsReducer } from "./reducer/comment-reducer";


export const rootReducer = combineReducers ({
  comments: commentsReducer,
})