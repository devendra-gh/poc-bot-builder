import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ActionBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="rz__action-bar">
      <Button variant="contained" color="secondary">
        Delete
      </Button>

      <ButtonGroup disableElevation variant="contained">
        <Button>Reset</Button>
        <Button>Save</Button>
      </ButtonGroup>

      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Import</MenuItem>
        <MenuItem onClick={handleClose}>Copy Clipboard</MenuItem>
        <MenuItem onClick={handleClose}>Export</MenuItem>
      </Menu>
    </div>
  );
};

export default ActionBar;
