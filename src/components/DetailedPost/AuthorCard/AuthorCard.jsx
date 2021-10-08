import { Card } from "react-bootstrap";
import React, { useContext } from "react";
import { PostContext } from "../../../context/postContext";
import { Link } from "react-router-dom";

const AuthorCard = ({ author }) => {
  const { setAuthorId } = useContext(PostContext);

  const handleClick = () => {
    setAuthorId(author[0].id);
  };
  if (author.length === 0) {
    return (
      <Card className="mt-2 mb-2" bg="secondary" text="white">
        <Card.Body>
          <Card.Title> Author does not exist :( </Card.Title>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mt-2 mb-2" bg="secondary" text="white">
      <Card.Body>
        <div>
          <Card.Title>Author: {author[0].name} </Card.Title>
        </div>

        <Card.Text>
          <strong>Bio:</strong> {author[0].bio}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AuthorCard;
