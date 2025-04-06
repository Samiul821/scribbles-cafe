import React from "react";
import Navbar from "./components/navbar/navbar";
import Blogs from "./components/Blogs/Blogs";

const App = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%] text-center">
          <h1>Reading time : 0</h1>
          <h1>bookmarkred count: 0</h1>
        </div>
      </div>
    </>
  );
};
export default App;
