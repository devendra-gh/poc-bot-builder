import Box from "@material-ui/core/Box";
import { Title, ButtonGroup, Button } from "../../../FormsUI";

const NotFoundNode = ({ onCancel }: any) => {
  return (
    <Box className="rz__editor--block">
      <Title>Node not available</Title>

      <ButtonGroup>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonGroup>
    </Box>
  );
};

export default NotFoundNode;
