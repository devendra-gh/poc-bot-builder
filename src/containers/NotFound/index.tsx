import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Not Fount</div>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default NotFound;
