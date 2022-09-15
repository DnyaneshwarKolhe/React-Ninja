import BlogList from "./BlogList";
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <h1>{error}</h1>}
      {isPending && <CircularProgress />}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;