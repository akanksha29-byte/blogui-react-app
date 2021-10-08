import React, { useState, useContext } from "react";
import { PostContext } from "../../../context/postContext";
import { Link } from "react-router-dom";

const Like = ({ post }) => {
  const [like, setLike] = useState(0);
  const { setCurrentPost } = useContext(PostContext);

  const handleClick = () => {
    setCurrentPost(post);
    localStorage.clear();
    localStorage.setItem("currentItem", JSON.stringify(post));
  };
  return (
    <div className="w-25 d-flex justify-content-between">
      <span
        className="d-flex justify-content-between"
        style={{ width: "40px" }}
      >
        <i className="far fa-thumbs-up" onClick={() => setLike(like + 1)}></i>
        <h6>{like}</h6>
      </span>

      <Link
        to={{ pathname: `/${post.id}` }}
        onClick={handleClick}
        style={{ textDecoration: "none", color: "black" }}
      >
        <i className="far fa-comments"></i>
      </Link>
    </div>
  );
};
export default Like;
