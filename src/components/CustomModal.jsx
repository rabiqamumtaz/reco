import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({
  open,
  onClose,
  title,
  subtitle,
  content,
  actions,
  icon,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          {icon}
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {subtitle && (
          <Typography variant="body2" color="text.secondary" mb={2}>
            {subtitle}
          </Typography>
        )}
        {content}
      </DialogContent>

      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default CustomModal;
