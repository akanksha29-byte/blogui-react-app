import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ pageX, handlePrev, handleNext, limit }) => {
  return (
    <Pagination>
      <Pagination.Item
        onClick={handlePrev}
        disabled={pageX === 0 ? true : false}
      >
        Prev
      </Pagination.Item>
      <Pagination.Item onClick={handleNext}>Next</Pagination.Item>
    </Pagination>
  );
};

export default Paginate;
