import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputSearch from '../CommanUI/InputSearch';
import Grid from '@mui/material/Grid';
import UserDetail from '../CommanUI/UserDetail';
import OldCheat from '../CommanUI/OldCheat';
import ChatWindow from '../CommanUI/ChatWindow';

const drawerWidth = 240;

export default function NavebarComp() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: 'white' }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div" style={{ width: "100%" }}>
                        <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
                            <Grid item xs={9}>
                                <InputSearch bgcolor="rgb(248, 248, 248)" placeholder="Search User"/>
                            </Grid>
                            <Grid item xs={2}>
                                <UserDetail />
                            </Grid>
                        </Grid>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{ justifyContent: 'center' }} style={{ fontSize: "43px", fontWeight: "600" }}>Chat Box</Toolbar>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            {/* Uncomment and customize as needed */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
                    <Grid item xs={9}>
                        <ChatWindow/>
                    </Grid>
                    <Grid item xs={3}>
                        <OldCheat />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
