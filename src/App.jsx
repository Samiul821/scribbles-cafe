import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  const [bookmarkred, setBookmarkred] = useState([]);


  const handleBookMark = (blog) => {
    setBookmarkred([...bookmarkred, blog])
  }

  console.log(bookmarkred);

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs handleBookMark={handleBookMark}></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading time : 0</h1>
          <h1>bookmarkred count: 0</h1>

          {
             bookmarkred.map((marked) => <p>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  );
};
export default App;
