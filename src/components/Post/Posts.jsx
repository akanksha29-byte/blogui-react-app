import React, { useState } from "react";
import Cards from "./Cards";
import { useContext } from "react";
import { PostContext } from "../../context/postContext";
import Paginate from "./Paginate/Paginate";

const Posts = () => {
  const { post } = useContext(PostContext);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(4);

  const handlePrev = () => {
    if (pageX > 0) {
      setPageX(pageX - 4);
      setPageY(pageY - 4);
    }
  };
  const handleNext = () => {
    if (post.length > pageY) {
      setPageX(pageX + 4);
      setPageY(pageY + 4);
    }
  };

  return (
    <div className="w-75">
      {post.slice(pageX, pageY).map((post) => (
        <Cards key={post.id} post={post} />
      ))}
      <Paginate
        pageX={pageX}
        pageY={pageY}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Posts;
