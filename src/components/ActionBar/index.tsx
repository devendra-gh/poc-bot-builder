import { useState } from "react";
import exportFromJSON from "export-from-json";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  Snackbar,
} from "@material-ui/core";
import { types } from "../../constants";
import { validateFlowJSON } from "../../utils/helpers";
import ImportDialog from "../ImportDialog";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    padding: theme.spacing(2),
    zIndex: 9,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const ActionBar = ({ workFlowState, onChangeWorkFlow }: any) => {
  const classes = useStyles();
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
    const jsonFlow = validateFlowJSON(jsonFlowString);

    if (jsonFlow) {
      const { currentWorkFlowIndex } = workFlowState;

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
    } else {
      setOpen({
        isOpen: true,
        message: `Not a valid Flow`,
        severity: "error",
      });
    }
  };

  return (
    <Box className={classes.root}>
      <Button variant="contained" color="secondary">
        Delete
      </Button>

      <ButtonGroup disableElevation variant="contained">
        <Button>Reset</Button>
        <Button>Save</Button>
      </ButtonGroup>

      <Box>
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
      </Box>
    </Box>
  );
};

export default ActionBar;
