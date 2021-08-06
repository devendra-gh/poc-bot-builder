import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const renderActions = (handleClose: any, handleImport: any) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>

      <Button onClick={handleImport} color="primary">
        Import
      </Button>
    </DialogActions>
  );
};

const ImportDialog = (props: any) => {
  const classes = useStyles();
  const { open, onClose, onImport } = props;
  let jsonFieldRef: any;

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleImport = () => {
    if (onImport) onImport(jsonFieldRef.value);
    if (onClose) onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth
      className={classes.root}
    >
      <DialogTitle id="simple-dialog-title">Import Workflow</DialogTitle>

      <DialogContent>
        <TextField
          id="filled-multiline-static"
          label="JSON with the Workflow information"
          inputRef={(e) => (jsonFieldRef = e)}
          multiline
          rows="6"
          defaultValue=""
          variant="filled"
          className={classes.root}
        />
      </DialogContent>

      {renderActions(handleClose, handleImport)}
    </Dialog>
  );
};

export default ImportDialog;
