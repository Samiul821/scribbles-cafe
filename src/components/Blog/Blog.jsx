import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
 
//   console.log(blog);
  return (
    <div className="m-2 w-[90%] mx-auto">
      {/* <h1>{blog.id}</h1> */}
      <div className="rounded-2xl bg-base-100  shadow-sm">
        <figure>
          <img className="rounded-t-2xl" src={blog.cover} alt="cover" />
        </figure>
        <div className="card-body">
          <div className="author flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img className="w-10" src={blog.author_img} alt="" />
              <div className="text-start">
                <h3 className="text-lg font-medium">{blog.author}</h3>
                <p className="text-lg">{blog.posted_date}</p>
              </div>
            </div>
            <button
              onClick={() => handleBookMark(blog)}
              className="cursor-pointer"
            >
              <FaBookmark size={25} />
            </button>
          </div>
          <h2 className="text-start card-title">{blog.title}</h2>
          <div className="text-start text-purple-800 underline">
            {blog.hashtags.map((has) => (
              <p key={has}>#{has}</p>
            ))}
          </div>
          
          <div className="card-actions justify-end">
            <button
              onClick={() => handleMarkAsRead(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
