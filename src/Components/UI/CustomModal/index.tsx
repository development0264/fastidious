import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";

interface ModalProps {
  children: string | JSX.Element[] | JSX.Element | any;
  open: boolean;
  handleClose: any;
  title: string;
  handleSubmit: any;
}

const CustomModal = (props: ModalProps) => {
  const { open, handleClose, children, title, handleSubmit } = props;
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" color="text.secondary" fontWeight={700}>
          {title}
        </Typography>
        <Box p={5} sx={{ maxHeight: "60vh", overflowY: "auto" }}>
          {children}
        </Box>
        <Box mt={3} textAlign="right">
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModal;
