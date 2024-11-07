import React from 'react';
import { AddCircleOutlineOutlined, FilterAlt, Notifications } from '@mui/icons-material';
import { Box, Typography, Tooltip } from '@mui/material';

export default function UserDetail() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Tooltip title="Create New" arrow>
        <AddCircleOutlineOutlined style={{ color: "black", height: "31px", width: "31px" }} />
      </Tooltip>
      <Tooltip title="Notifications" arrow>
        <Notifications style={{ color: "black", height: "31px", width: "31px" }} />
      </Tooltip>
      <Tooltip title="Filters" arrow>
        <FilterAlt style={{ color: "black", height: "31px", width: "31px" }} />
      </Tooltip>
      <Box
        sx={{
          width: 45,
          height: 45,
          background: "gray",
          borderRadius: "50%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: "white",
          fontWeight: 'bold',
        }}
      >
        <Typography variant="body2">DG</Typography>
      </Box>
    </Box>
  );
}
