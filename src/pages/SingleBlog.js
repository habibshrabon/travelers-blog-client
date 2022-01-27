import React, { useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  const exactData = blogDetails.filter((td) => td.id === id);
  console.log(exactData);
  return (
    <div className="container py-24">
      <div className="grid grid-cols-12 items-center gap-4">
        <div className="md:col-span-4 col-span-12">
          <img
            className="w-full h-full"
            src={exactData[0]?.img}
            alt={exactData[0]?.title}
          />
        </div>
        <div className="md:col-span-4 p-4 col-span-12">
          <div className="flex justify-between">
            <h3>{exactData[0]?.title}</h3>
            <h3>${exactData[0]?.cost}</h3>
          </div>
          <div className="flex justify-between">
            <ul className="flex">
              <li className="">
                <BsFillStarFill />
              </li>
              <li className="">
                <BsFillStarFill />
              </li>
              <li className="">
                <BsFillStarFill />
              </li>
              <li className="">
                <BsFillStarFill />
              </li>
              <li className="">
                <BsFillStarFill />
              </li>
            </ul>
            <p>10 Review</p>
          </div>
          <p>{exactData[0]?.description}</p>
          <ul className="flex gap-2 mt-4">
            <li className="flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full hover:bg-blue-800">
              <Link to="https://www.facebook.com">
                <FaFacebookF className="text-xl text-white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full hover:bg-blue-400">
              <Link to="#">
                <FaTwitter className="text-xl text-white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700">
              <Link target="_blank" to="www.linkedin.com">
                <FaLinkedinIn className="text-xl text-white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full hover:bg-red-500">
              <Link to="#">
                <FaPinterestP className="text-xl text-white" />
              </Link>
            </li>
            <li className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-full hover:bg-green-500">
              <Link to="#">
                <FaWhatsapp className="text-xl text-white" />
              </Link>
            </li>
          </ul>
          <button className="py-3 px-8 font-bold rounded bg-blue-400 hover:bg-blue-600 text-white mt-4">
            Checkout
          </button>
        </div>
        <div className="md:col-span-4 p-4 col-span-12">
          <div className="p-2 my-10 md:p-5 tab1">
            <h5>Your Reviews</h5>
            <div className="giveReview">
              <form action="">
                <div className="">
                  <div className="w-full div1">
                    <p className="mb-3">Your name</p>
                    <input
                      className="w-full border border-gray-500  rounded p-3"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="w-full div1">
                    <p className="mb-3">Your Email</p>
                    <input
                      className="w-full border border-gray-500 rounded p-3"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                </div>
                <p className="mt-5">Your Review</p>
                <textarea
                  className="w-full border border-gray-500 rounded p-3"
                  placeholder="Review"
                />
                <br />
                <button
                  className="py-3 px-8 font-bold rounded bg-blue-400 hover:bg-blue-600 text-white mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
