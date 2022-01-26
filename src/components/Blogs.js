import React, { useEffect, useState } from "react";
import Blog from "../common/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center my-5">
        <b>BLOG POST</b>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-3 md:block hidden">this side bar</div>
        <div className="md:col-span-9 col-span-6">
          <div className="grid grid-cols-12 gap-4">
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
