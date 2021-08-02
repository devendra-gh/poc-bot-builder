import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

const renderActions = (handleClose: any, handleImport: any) => {
  return (
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancle
      </Button>

      <Button onClick={handleImport} color="primary">
        Import
      </Button>
    </DialogActions>
  );
};

const ImportDialog = (props: any) => {
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
      style={{ width: "100%" }}
      fullWidth
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
          className=""
          margin="normal"
          variant="filled"
          style={{ width: "100%" }}
        />
      </DialogContent>

      {renderActions(handleClose, handleImport)}
    </Dialog>
  );
};

export default ImportDialog;
