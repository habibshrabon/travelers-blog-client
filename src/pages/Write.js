import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Header from "../common/Header";

const Write = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://still-hollows-84383.herokuapp.com/blogs", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Posted successfully");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className="add-product">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true })}
            placeholder="Title"
          />
          <input {...register("location")} placeholder="Location" />
          <textarea {...register("desc")} placeholder="Description" />
          <input
            {...register("img", { required: true })}
            placeholder="Image URL"
          />

          <input
            type="text"
            {...register("time")}
            placeholder="Date you visited"
          />
          <input type="number" {...register("cost")} placeholder="Total Cost" />

          <input
            {...register("name", { required: true })}
            placeholder="Your name"
          />

          <input
            className="bg-gray-500 hover:bg-blue-600 text-white"
            type="submit"
            value="Post This Blog"
          />
        </form>
      </div>
    </>
  );
};

export default Write;
