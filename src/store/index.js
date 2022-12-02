import { combineReducers } from 'redux'
import { admin } from './admin'
import { user } from './user'

export const reducer = combineReducers({
  admin,
  user,
})
