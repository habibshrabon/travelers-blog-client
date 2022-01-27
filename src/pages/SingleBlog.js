import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogDetails(data));
  }, []);

  const exactData = blogDetails.filter((td) => td.slug === id);
  console.log(exactData);
  return <div></div>;
};

export default SingleBlog;
