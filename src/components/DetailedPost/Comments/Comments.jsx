import { useEffect, useState } from "react";
import Cards from "./Cards";
import { Spinner } from "react-bootstrap";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const data = await fetch(
          `https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/${id}/comments`
        );
        const result = await data.json();

        setComments(result);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchApi();
  }, [id]);

  if (loading) {
    return (
      <Spinner animation="border" role="status" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (error) {
    return <h5>{error}</h5>;
  }

  return (
    <div className="mt-3">
      {comments.length !== 0 ? (
        comments.map((c, index) => {
          return <Cards key={index} comment={c} />;
        })
      ) : (
        <p style={{ color: "gray" }}>No Comments yet!!</p>
      )}
    </div>
  );
};

export default Comments;
