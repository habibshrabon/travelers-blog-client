import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-peak-40927.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="dashboard-content">
      <div className="md:col-span-3 hidden md:block">
        <AdminSidebar />
      </div>
      <div className="md:col-span-9 col-span-12">
        <div className="grid grid-cols-12 gap-4">
          {blogs.map((blog) => (
            <div className="md:col-span-3 col-span-6">
              <img src={blog.img} alt="" className="w-full h-60 object-cover	" />
              <h6>{blog.title}</h6>
              <p>Posted by {blog.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
