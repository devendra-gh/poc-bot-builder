import React from 'react';
import { Title, ButtonGroup, Button, EditorBlock } from "../../../FormsUI";

const NotFoundNode = ({ onCancel }) => {
  return (
    <EditorBlock>
      <Title>Node not available</Title>

      <ButtonGroup>
        <Button onClick={onCancel}>Cancel</Button>
      </ButtonGroup>
    </EditorBlock>
  );
};

export default NotFoundNode;
