import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [post, setPost] = useState([]);
  const [authorId, setAuthorId] = useState(0);
  const [currentPost, setCurrentPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const body = await fetch(
          `https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/`
        );
        const result = await body.json();
        setPost(result.reverse());
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };
    fetchApi();
  }, []);

  const postBlog = async (data) => {
    const result = await fetch(
      "https://5fbcebea3f8f90001638c727.mockapi.io/blog/v1/posts/",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return result;
  };

  const store = {
    post,
    setPost,
    postBlog,
    setCurrentPost,
    currentPost,
    authorId,
    setAuthorId,
  };
  return (
    <PostContext.Provider value={store}>
      {!loading && props.children}
    </PostContext.Provider>
  );
};
