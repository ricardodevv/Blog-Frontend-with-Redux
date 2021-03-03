import './App.css';
import React from 'react'
import NewBlog from './components/NewBlog'
import Blogs from './components/Blogs' 

const App = () => {
  const filterSelected = (value) => {
    console.log(value)
  }

  return (
    <div className="App">
      <NewBlog />
      <div>
        all   
        <input 
          type="radio" 
          name="filter"
          onChange={() => filterSelected('ALL')} 
        />
        ascending
        <input 
          type="radio"
          name="filter"
          onChange={() => filterSelected('ASCENDING')}
        />
        descending
        <input 
          type="radio"
          name="filter"
          onChange={() => filterSelected('DESCENDING')}
        />  
      </div>
      <Blogs />
    </div>
  )
}

export default App
