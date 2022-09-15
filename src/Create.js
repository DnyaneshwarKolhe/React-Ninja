import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    setTimeout(() => {
      fetch('http://localhost:8000/blogs',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(blog)
        }
      ).then(() => {
        setIsPending(false);
        navigate("/");
      })
    }, 0);
  }
  return (
    <div className="create">
      <h2>Create new blog</h2>
      <form onSubmit={() => handleSubmit(props.id)}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <label>Author</label>
        <select
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button><CircularProgress size={11} color="primary" />Adding</button>}
      </form>
    </div>
  );
}

export default Create;