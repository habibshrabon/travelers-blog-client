/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="flex items-center justify-center w-10 h-10 font-bold text-white border border-gray-500 rounded-full hover:bg-blue-700 bg-blue-500
          "
          >
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
