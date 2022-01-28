/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../common/Blog";
import { BsStarFill } from "react-icons/bs";
import Pagination from "./Pagination";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://still-hollows-84383.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h2 className="text-center my-5">
        <b>BLOG POST</b>
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <div className="md:col-span-9 col-span-6">
          <div className="grid grid-cols-12 gap-4">
            {currentPosts.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}

            <div>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={blogs.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="col-span-12 md:col-span-4">
            <div className="px-2 col-lg-4 col-md-12">
              <div className="title blog-sidebar right-pos">
                <div className="widget widget_search">
                  <form
                    role="search"
                    method="get"
                    action="#"
                    className="search-form"
                  >
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Search..."
                        value=""
                        name="s"
                        required=""
                      />
                    </label>
                    <button type="submit" className="search-submit">
                      <i className="bx bx-search-alt"></i>
                    </button>
                  </form>
                </div>
                <div id="#" className="widget widget_rola_cats mb-12">
                  <h3 className="widget-title">Category</h3>
                  <ul className="cus_widget_categories">
                    <li>
                      <div className="flex items-center justify-between">
                        <a href="#">Adventure </a>
                        <a href="#">(2)</a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <a href="#">City</a>
                        <a href="#">(1)</a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <a href="#">Destination </a>
                        <a href="#">(1)</a>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center justify-between">
                        <a href="#">Mountain</a>
                        <a href="#">(2)</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-blog mb-12">
                  <h3 className="sidebar-blog__title">Recent Posts</h3>
                  {blogs.slice(0, 4).map((blog) => (
                    <div
                      key={blog.id}
                      className="grid grid-cols-12 gap-4 mb-2 border-b border-b-gray-200"
                    >
                      <div className="col-span-3 ">
                        <img className="rounded" src={blog.img} />
                      </div>
                      <div className="col-span-9 text-base font-medium text-black-500">
                        <h5>
                          <Link to="#">{blog.title}</Link>
                        </h5>
                        <p>July 31, 2021</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="widget_tag_cloud mb-12">
                  <h3 className="">Tags</h3>
                  <div className="widget_tag_cloud__wrapper">
                    <a href="#">CITY</a>
                    <a href="#">DESTINATION</a>
                    <a href="#">FRANCE</a>
                    <a href="#">TOUR</a>
                    <a href="#">TRAVELS</a>
                  </div>
                </div>
                <div className="quote-info-box">
                  <div className="info-item">
                    <div className="info-item__rating">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                      arcu a dignissim suscipit non ac eget tellus in nisl
                      mauris nec
                    </p>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <img
                      className="rounded-full w-14 h-14"
                      src="https://i.ibb.co/q11CTCT/DSC-0191.jpg"
                      alt="Author Image Link"
                    />
                    <div>
                      <h3 className="mb-2 font-bold text-blue-500">
                        Ahsan Habib
                      </h3>
                      <span className="text-orange-600">
                        Subscribe & Follow
                      </span>
                      <ul className="flex gap-2 mt-4">
                        <li className="flex items-center justify-center w-8 h-8 bg-blue-900 rounded-full hover:bg-blue-800">
                          <Link
                            target="_blank"
                            to="https://www.facebook.com/habib.sharabon"
                          >
                            <FaFacebookF className="text-xl text-white" />
                          </Link>
                        </li>
                        <li className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full hover:bg-blue-400">
                          <Link to="#">
                            <FaTwitter className="text-xl text-white" />
                          </Link>
                        </li>
                        <li className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700">
                          <Link
                            target="_blank"
                            to="https://www.linkedin.com/in/sn-habib/"
                          >
                            <FaLinkedinIn className="text-xl text-white" />
                          </Link>
                        </li>
                        <li className="flex items-center justify-center w-8 h-8 bg-red-600 rounded-full hover:bg-red-500">
                          <Link to="#" target="_blank">
                            <FaPinterestP className="text-xl text-white" />
                          </Link>
                        </li>
                        <li className="flex items-center justify-center w-8 h-8 bg-green-600 rounded-full hover:bg-green-500">
                          <Link to="#" target="_blank">
                            <FaWhatsapp className="text-xl text-white" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
