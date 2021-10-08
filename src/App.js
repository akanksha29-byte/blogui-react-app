import React from "react";
import Posts from "./components/Post/Posts";
import DetailedPost from "./components/DetailedPost/DetailedPost";
import { PostProvider } from "./context/postContext";
import Header from "./components/Header/Header";
import BlogForm from "./components/Form/BlogForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <PostProvider>
      <Router>
        <Header />
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ marginTop: "70px" }}
        >
          <Switch>
            <Route path="/create-post" component={BlogForm} />

            <Route path="/:id" component={DetailedPost} />
            <Route path="/" exact>
              <Posts />
            </Route>
          </Switch>
        </div>
      </Router>
    </PostProvider>
  );
};

export default App;
