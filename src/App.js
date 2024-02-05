import React from 'react'
import Blogs from './Components/Blogs'
import Header from './Components/Header'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext';
import { useContext, useEffect } from 'react'
import "./App.css"

export const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

    useEffect(() => {
    fetchBlogPosts();
  }, [])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
