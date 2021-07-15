import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const NotFound: React.FC<Props> = () => {
  return (
    <div>
      <div>Not Fount</div>
      <Link to={`/`}>Back</Link>
    </div>
  );
};

export default NotFound;
