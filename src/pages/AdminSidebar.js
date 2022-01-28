import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      className="admin-sidebar flex flex-col justify-between md:col-span-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="glassy">Exploore</h2>
        </Link>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to="/manageBlogs"
            className="text-white"
          >
            <span>Manage Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            style={{ textDecoration: "none" }}
            to="/makeAdmin"
            className="text-white"
          >
            <span>Make Admin</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
