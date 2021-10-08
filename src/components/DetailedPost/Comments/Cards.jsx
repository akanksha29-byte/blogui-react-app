import { Card } from "react-bootstrap";

const Cards = ({ comment }) => {
  return (
    <Card className="mb-3 mt-3">
      <Card.Body>
        <div className="d-flex align-items-center">
          <i
            className="fas fa-user-tie"
            style={{ fontSize: "20px", marginRight: "20px" }}
          ></i>

          <Card.Title> {comment.author} </Card.Title>
        </div>

        <Card.Text>{comment.comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
