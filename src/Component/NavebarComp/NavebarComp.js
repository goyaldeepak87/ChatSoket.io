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
                sx={{
                    width: {
                        xs: '100%', // Full width for mobile
                        md: `calc(100% - ${drawerWidth}px)`, // Width for desktop
                    },
                    ml: {
                        xs: '0px', // No margin for mobile
                        md: `${drawerWidth}px`, // Margin for desktop
                    },
                    backgroundColor: 'white',
                }}
            >
                <Toolbar sx={{ minHeight: { xs: '120px', md: '60px' } }}> {/* Responsive minHeight */}
                    <Typography variant="h6" noWrap component="div" style={{ width: "100%" }}>
                        <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
                            <Grid item xs={12} md={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-between", order: { xs: 2, md: 2 } }}>
                                <Box sx={{ display: { xs: 'flex', md: 'none' }, color: "black" }}>
                                    Chat Box
                                </Box>
                                <UserDetail sx={{ display: { xs: 'none', md: 'flex' } }} />
                            </Grid>
                            <Grid item xs={12} md={9} sx={{ order: { xs: 2, md: 1 } }}>
                                <InputSearch
                                    bgcolor="rgb(248, 248, 248)"
                                    placeholder="Search User"
                                    fullWidth // Ensure fullWidth is set for this component
                                />
                            </Grid>
                        </Grid>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: {
                        xs: 60, // Width for mobile
                        md: drawerWidth // Width for desktop
                    },
                    display: { xs: 'none', md: 'block' },
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: {
                            xs: 60, // Paper width for mobile
                            md: drawerWidth // Paper width for desktop
                        },
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{ justifyContent: 'center' }} style={{ fontSize: "20px", fontWeight: "600" }}>Chat</Toolbar>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText
                                    sx={{
                                        display: { xs: 'none', md: 'block' } // Hide text on mobile
                                    }}
                                    primary={text}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar sx={{ minHeight: { xs: '120px', md: '60px' } }} />
                <Grid container spacing={2} style={{ justifyContent: "space-between" }}>
                    <Grid item xs={12} md={9}>
                        <ChatWindow />
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}> {/* Hide on xs screens */}
                        <OldCheat />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
