import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

const NotFound = () => {
  return (
    <Box>
      <Box>Not Fount</Box>
      <Link to={`/`}>Back</Link>
    </Box>
  );
};

export default NotFound;
