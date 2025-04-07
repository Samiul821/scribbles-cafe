import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleMarkAsRead}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // console.log(blogs);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-start ml-5">Blogs: {blogs.length}</h1>

      <div className="all-blgos grid grid-cols-1 lg:grid-cols-2">
        {
          blogs.map((blog) => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
