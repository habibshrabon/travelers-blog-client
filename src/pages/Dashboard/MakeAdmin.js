import React, { useState } from "react";
import AdminSidebar from "../AdminSidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://still-hollows-84383.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
        }
      });
    alert("Admin Role added");
    e.preventDefault();
  };
  return (
    <div className="dashboard-content">
      <div className="md:col-span-3 hidden md:block">
        <AdminSidebar />
      </div>
      <div className="md:col-span-9 col-span-12 mt-16">
        <h2>Make An Admin</h2>
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleOnBlur}
            type="email"
            className="border border-blue-500 rounded p-2 w-3/5 mt-4"
          />
          <button
            type="submit"
            className=" bg-yellow-500 rounded font-bold hover:bg-blue-600 py-3 px-8 block mt-4"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
