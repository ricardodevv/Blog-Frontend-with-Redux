import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { likeButton } from '../reducers/blogReducer'

const Blogs = () => {
  const dispatch = useDispatch()
  const blogs = useSelector(state => state.blogs)
  console.log(blogs)

  const clickLikeButton = (id) => {
      dispatch(likeButton(id))
    }

  return (
    <ul>
      {blogs.map(blog => 
        <li 
          key={blog.id}
          onClick={() => clickLikeButton(blog.id)} 
        >
          {blog.title}
          {blog.likes}
        </li>
      )}
    </ul>
  )
} 

export default Blogs

   