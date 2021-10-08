import React, { useContext, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "./Form.module.css";
import { PostContext } from "../../context/postContext";

const BlogForm = () => {
  const { postBlog } = useContext(PostContext);
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title: e.target[0].value, content: e.target[1].value };
    postBlog(data)
      .then((res) => setResponse(res.statusText))
      .catch((err) => setResponse(err.message));
    e.target[0].value = "";
    e.target[1].value = "";
  };
  return (
    <Form className={styles.form_container} onSubmit={handleSubmit}>
      <h2>Add new Post</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title..." required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Blog post..."
          required
        />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {response && (
        <Alert className="mt-3" variant="success">
          {response}
        </Alert>
      )}
    </Form>
  );
};

export default BlogForm;
