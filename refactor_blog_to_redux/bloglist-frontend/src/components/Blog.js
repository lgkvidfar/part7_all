import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import blogService from '../services/blogs'
import { initializeBlogs } from '../reducers/blogReducer'
import { timedMessage } from '../reducers/notificationReducer'
import { setFocusedBlog } from '../reducers/focusedBlogReducer'



const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const handleRemove = async () => {
    try {
      if(window.confirm(`delete ${blog.title}?`)) {
        await blogService.remove(blog.id)
        const blogs = await blogService.getAll()
        blogs.sort((a, b) => b.likes - a.likes)

        dispatch(timedMessage(`${blog.title} by ${blog.author} has been removed`), 3)
        dispatch(initializeBlogs())
      }
    }catch(err) {
      dispatch(timedMessage('error', err.messsage))
    }
  }


  const handleClick = (blog) => {
    dispatch(setFocusedBlog(blog))
  }

  return (
    <div id="blogTitle" className="blog">
      <li><Link to={`/blogs/${blog.id}`} onClick={() => handleClick(blog)}>{blog.title}</Link> | {blog.likes || 0} likes</li>
      <div>written by {blog.author} </div>
      <p>summary summary summary</p>
      <button type="button" onClick={() => handleRemove(blog)}>delete</button><br/>
      <br/>
    </div>
  )
}

export default Blog