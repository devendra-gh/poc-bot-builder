import React, { useState } from "react";
import _ from "lodash";
import exportFromJSON from "export-from-json";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import { types } from "../../constants";
import validateFlowJSON from "../../utils/validateFlowJSON";
import ImportDialog from "../ImportDialog";

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ActionBar = ({ workFlowState, onChangeWorkFlow }: any) => {
  const [open, setOpen] = useState({
    isOpen: false,
    message: "",
    severity: "",
  });
  const [isOpenImport, setIsOpenImport] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const onClickMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClose = (_: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({
      isOpen: false,
      message: "",
      severity: "",
    });
  };

  const setImportDialogActive = (value: any) => {
    setIsOpenImport(value);
  };

  const onClickCopyClipboard = () => {
    const { currentWorkFlowIndex } = workFlowState;
    const data = workFlowState.flows[currentWorkFlowIndex];
    const fileName = `${data.name}`;

    navigator.clipboard.writeText(JSON.stringify(data));
    setOpen({
      isOpen: true,
      message: `[${fileName}] Successfully copied in clipboard`,
      severity: "success",
    });
  };

  const onClickExport = () => {
    const { currentWorkFlowIndex } = workFlowState;
    const data = workFlowState.flows[currentWorkFlowIndex];
    const fileName = `${data.name}`;
    const exportType = exportFromJSON.types.json;

    exportFromJSON({ data, fileName, exportType });
    setOpen({
      isOpen: true,
      message: `[${fileName}] Successfully exported`,
      severity: "success",
    });
  };

  const importFlowData = (jsonFlowString: any) => {
    debugger;
    const jsonFlow = validateFlowJSON(jsonFlowString);

    if (!jsonFlow) {
      setOpen({
        isOpen: true,
        message: `Not a valid Flow`,
        severity: "error",
      });
    } else {
      debugger;
      const { currentWorkFlowIndex } = workFlowState;
      debugger;

      onChangeWorkFlow({
        type: types.ON_IMPORT_WORKFLOW,
        workFlowIndex: currentWorkFlowIndex,
        importSchema: jsonFlow.schema,
      });

      setOpen({
        isOpen: true,
        message: `Successfully Workflow imported`,
        severity: "success",
      });
    }
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

      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={onClickMenu}
        >
          Menu
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={onCloseMenu}
        >
          <MenuItem onClick={() => setImportDialogActive(true)}>
            Import
          </MenuItem>
          <MenuItem onClick={onClickCopyClipboard}>Copy Clipboard</MenuItem>
          <MenuItem onClick={onClickExport}>Export</MenuItem>
        </Menu>

        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open.isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={open.severity || "info"}>
            {open.message}
          </Alert>
        </Snackbar>

        <ImportDialog
          open={isOpenImport}
          onClose={() => setImportDialogActive(false)}
          onImport={(jsonData: any) => importFlowData(jsonData)}
        />
      </div>
    </div>
  );
};

export default ActionBar;
