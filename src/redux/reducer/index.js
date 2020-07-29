import { combineReducers } from "redux"
import users from "./users"
import category from "./category"
import news from "./news"
export default combineReducers({ users, category, news })
