import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import blogReducer, { createBlog } from './reducers/blogReducer'
import filterReducer, { filterChange } from './reducers/filterReducer'

const reducer = combineReducers({
  blogs: blogReducer,
  filter: filterReducer
})

const store = createStore(reducer)

//console.log(store.getState())

//store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('ASCENDING'))
store.dispatch(createBlog('mfks only want to be loved'))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
