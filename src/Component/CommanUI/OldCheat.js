import React from 'react';
import { Box, Typography, TextField, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InputSearch from './InputSearch';

export default function ChatList() {
    return (
        <Box sx={{ width: 300, backgroundColor: 'rgb(248, 248, 248)', padding: 2, borderRadius: 2 }}>
            {/* Search Bar */}
            <Box display="flex" alignItems="center" mb={2}>
                <InputSearch bgcolor="white" placeholder="Search People"/>
            </Box>

            {/* Chat List Title */}
            <Typography variant="subtitle1" gutterBottom>
                All Chats
            </Typography>

            {/* Chat Items */}
            {Array.from({ length: 2 }, (_, index) => (
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src="/path-to-avatar.jpg" alt="Bob Marley" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Box display="flex" alignItems="center">
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 0.5 }}>Bob Marley</Typography>
                                    <CheckCircleIcon fontSize="small" color="success" />
                                </Box>
                            }
                            secondary="hik"
                        />
                        <Typography variant="caption" sx={{ ml: 'auto' }}>
                            25w
                        </Typography>
                    </ListItem>
                    <Divider />
                </List>
            ))}

        </Box>
    );
}
