import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoginPage from "../login/Login";
import { AiOutlineClose } from "react-icons/ai";

export default function AlertDialog({ isOpen, setIsOpen }) {
  // const [open, setOpen] = React.useState();

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="p-2 text-right">
          {" "}
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <DialogContent>
          <LoginPage />
        </DialogContent>
        {/* handleClose */}
      </Dialog>
    </div>
  );
}
