import { Navigate, useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);
  let [redirect, setRediret] = useState(false);


  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, { method: 'Delete' })
    setRediret(true);
  }

  return (
    <div className="blog-details">
      {error && <h1>{error}</h1>}
      {isPending && <CircularProgress />}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
      {redirect && <Navigate replace to="/" />}
    </div>
  );
}

export default BlogDetails;