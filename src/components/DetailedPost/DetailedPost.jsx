import React, { useContext } from "react";
import AuthorCard from "./AuthorCard/AuthorCard";
import Comments from "./Comments/Comments";
import { PostContext } from "../../context/postContext";
import { Form } from "react-bootstrap";
import styles from "./DetailedPost.module.css";

const DetailedPost = () => {
  let { currentPost } = useContext(PostContext);
  if (Object.keys(currentPost).length === 0) {
    currentPost = JSON.parse(localStorage.getItem("currentItem"));
  }

  return (
    <div className="w-75">
      <div className="d-flex justify-content-between align-items-center w-100 p-3">
        <h1 className="text-primary">{currentPost.title}</h1>
        <h5>{new Date(currentPost.dateCreated).toLocaleDateString()}</h5>
      </div>
      <img
        src={currentPost.coverImage}
        className="w-100"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          height: "250px",
          marginBottom: "20px",
        }}
        alt={currentPost.title}
      />
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        doloribus, repudiandae omnis quae vel possimus provident, maxime veniam
        itaque odit suscipit sequi deleniti, fugiat iure tempora tenetur ab a
        aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        numquam, quidem molestias nobis, blanditiis dolores molestiae aut error
        nemo suscipit tenetur voluptate laborum iusto, quaerat itaque? Aliquid
        aliquam quaerat magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim iste ducimus autem magni amet facilis voluptas
        perspiciatis suscipit. Consectetur harum nostrum deserunt! Quidem
        accusamus explicabo deleniti tenetur, numquam expedita illo!
      </p>
      <p style={{ textAlign: "justify" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
        doloribus, repudiandae omnis quae vel possimus provident, maxime veniam
        itaque odit suscipit sequi deleniti, fugiat iure tempora tenetur ab a
        aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        numquam, quidem molestias nobis, blanditiis dolores molestiae aut error
        nemo suscipit tenetur voluptate laborum iusto, quaerat itaque? Aliquid
        aliquam quaerat magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Enim iste ducimus autem magni amet facilis voluptas
        perspiciatis suscipit. Consectetur harum nostrum deserunt! Quidem
        accusamus explicabo deleniti tenetur, numquam expedita illo!
      </p>

      <AuthorCard author={currentPost.author} />
      <div className={styles.comment_box}>
        <h5>Comments</h5>
        <Comments id={currentPost.id} />

        <Form className={styles.form}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Comment..." />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default DetailedPost;
