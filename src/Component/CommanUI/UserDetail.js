import React from 'react';
import { AddCircleOutlineOutlined, FilterAlt, Notifications } from '@mui/icons-material';
import { Box, Typography, Tooltip } from '@mui/material';

export default function UserDetail() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 } }}>
      <Tooltip title="Create New" arrow>
        <AddCircleOutlineOutlined 
          sx={{ 
            color: "black", 
            height: { xs: "24px", md: "31px" }, // Responsive height
            width: { xs: "24px", md: "31px" }   // Responsive width
          }} 
        />
      </Tooltip>
      <Tooltip title="Notifications" arrow>
        <Notifications 
          sx={{ 
            color: "black", 
            height: { xs: "24px", md: "31px" }, // Responsive height
            width: { xs: "24px", md: "31px" }   // Responsive width
          }} 
        />
      </Tooltip>
      <Tooltip title="Filters" arrow>
        <FilterAlt 
          sx={{ 
            color: "black", 
            height: { xs: "24px", md: "31px" }, // Responsive height
            width: { xs: "24px", md: "31px" }   // Responsive width
          }} 
        />
      </Tooltip>
      <Box
        sx={{
          width: { xs: 35, md: 45 }, // Responsive width
          height: { xs: 35, md: 45 }, // Responsive height
          background: "gray",
          borderRadius: "50%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: "white",
          fontWeight: 'bold',
          fontSize: { xs: '0.75rem', md: '1rem' }, // Responsive font size
        }}
      >
        <Typography variant="body2">DG</Typography>
      </Box>
    </Box>
  );
}
