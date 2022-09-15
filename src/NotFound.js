import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1><strong>404</strong><small>Sorry</small></h1>
      <p>The page you requested for is not found</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default NotFound;