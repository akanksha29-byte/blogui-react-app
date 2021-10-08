import React from "react";

import { Card } from "react-bootstrap";
import styles from "./Post.module.css";
import Like from "./Like/Like";

const Cards = ({ post }) => {
  const { author } = post;

  return (
    <Card className="m-3">
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <div className={styles.author_details}>
            <img
              src={post.coverImage}
              className={styles.avatar}
              alt={post.title}
            />
            <h5 style={{ marginLeft: "20px" }}>
              {author[0] ? author[0].name : "Dummy name"}
            </h5>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit.{" "}
          </p>
          <footer className="footer">
            <Like post={post} />
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default Cards;
