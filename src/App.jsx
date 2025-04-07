import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  const [bookmarkred, setBookmarkred] = useState([]);
  const [readingCount, setReadingCount] = useState(0);


  const handleBookMark = (blog) => {
    setBookmarkred([...bookmarkred, blog]);
  }

  const handleMarkAsRead = (time,id) => {
    setReadingCount(readingCount + time);
    handleRemvoeFromBookmark(id)
  }

  // console.log(readingCount);

  // console.log(bookmarkred);

  const handleRemvoeFromBookmark = (id) => {
    const remainingBookMark = bookmarkred.filter((mark) => mark.id !== id);
    console.log(remainingBookMark);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center w-[80%] mx-auto gap-3 my-6">
        <div className="left-container w-[70%] shadow rounded-2xl py-3">
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container text-start bg-gray-300 w-[30%] px-4 py-2 rounded-2xl">
          <h1 className="text-xl font-medium">Reading time : {readingCount}</h1>
          <h1 className="text-lg">Bookmarkred Count: {bookmarkred.length}</h1>

          {
             bookmarkred.map((marked) => <p
             key={marked.id} className=" bg-gray-200 shadow mt-2 rounded-xl p-3">{marked.title}</p>)
          }
        </div>
      </div>
    </>
  );
};
export default App;
