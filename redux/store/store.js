import {createStore,combineReducers} from 'redux'

import { taskReducer } from '../reducer/todoReducer'

const rootReducer = combineReducers({
    task:taskReducer
})

const initialState ={
    task:[],

}

const  store = createStore(rootReducer,initialState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;