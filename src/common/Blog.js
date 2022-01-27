import React from "react";

const Blog = ({ blog }) => {
  const { name, description, title, img, cost, location, date, id, ratings } =
    blog;
  return (
    <>
      <div className="md:col-span-4 col-span-6">
        <div className="single-services">
          <div className="services-image">
            <a href={`singleBlog/${id}`}>
              <img src={img} alt={name} />
            </a>
          </div>
          <div className="services-content">
            <h4 className="text-cente">{location}</h4>
            <h3>
              <a href={`singleBlog/${id}`}>{title}</a>
            </h3>
            <div className="text-justify">
              <span>{date}</span> | <span>{name} </span>|{" "}
              <span>Ratings: {ratings}</span>
            </div>
            <h4 className="text-justify">Package Rate:{cost}</h4>
            <p className="text-justify mb-4">{description}</p>
            <a
              href={`singleBlog/${id}`}
              className=" py-3 px-8 font-bold rounded bg-blue-500 hover:bg-blue-600 text-white mt-4"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
