import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, IconButton, TextField, ClickAwayListener } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoIcon from '@mui/icons-material/Photo';
import SendIcon from '@mui/icons-material/Send';
import CheckIcon from '@mui/icons-material/Check';
import EmojiCopm from './EmojiCopm';

import { io } from 'socket.io-client';
const socket = io('http://localhost:8001');

export default function ChatWindow() {
    const [showEmoji, setShowEmoji] = useState(false);
    const [inputText, setInputText] = useState("");
    // const [inputCheatText, setInputCheatText] = useState("");
    const [connectionId, setConnectionId] = useState(null);
    const [messages, setMessages] = useState([]);

    const handleClickAway = () => {
        if (showEmoji) {
            setShowEmoji(false);
        }
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value)
    }
    console.log(inputText)


    useEffect(() => {
        // Listen for the connection ID from the server
        socket.on('connectionId', (id) => {
            setConnectionId(id);
            console.log('Connection ID:', id);
        });

        // Listen for incoming messages
        socket.on('message', (message) => {
            setMessages(prevMessages => [...prevMessages, message]); // Store received messages
            console.log('Received message:', message);
        });

        // Cleanup on component unmount
        return () => {
            socket.off('connectionId'); // Remove listener
            socket.off('message'); // Remove listener
            socket.disconnect(); // Optionally disconnect
        };
    }, []);


    const sendMessage = () => {
        if (inputText.trim()) {
            socket.emit('user-message', inputText);
            setInputText(''); // Clear input after sending
        }
    };

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setInputText(""); // Clear input after sending
            socket.emit('user-message', inputText);
        }
    };

    return (
        <Box sx={{ height: 'calc(100vh - 112px)', display: 'flex', flexDirection: 'column', borderRadius: 2, overflow: 'hidden', border: '1px solid lightgray' }}>

            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'white', borderBottom: '1px solid lightgray' }}>
                <IconButton>
                    <ArrowBackIcon />
                </IconButton>
                <Avatar src="/path-to-avatar.jpg" alt="Bob Marley" sx={{ marginRight: 2 }} />
                <Box flex={1}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Bob Marley</Typography>
                    <Typography variant="caption" color="textSecondary">Last seen 07 Oct 2024 at 01:52pm</Typography>
                </Box>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>

            {/* Chat Area */}
            <Box sx={{ flex: 1, padding: 2, overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
                {/* Date Divider */}
                <Typography align="center" variant="caption" color="textSecondary" sx={{ marginBottom: 1, backgroundColor: '#e0e0e0', borderRadius: 1, display: 'inline-block', padding: '2px 8px' }}>
                    16/05/2024
                </Typography>

                {/* Incoming Message */}
                <Box display="flex" alignItems="flex-end" mb={1}>
                    <Typography sx={{ fontSize: '1.5rem', marginRight: 1 }}>😊</Typography>
                    <Box sx={{ backgroundColor: 'white', borderRadius: 2, padding: '8px 12px', maxWidth: '60%' }}>
                        <Typography variant="body2">hik</Typography>
                        <Typography variant="caption" color="textSecondary">11:33 AM</Typography>
                    </Box>
                </Box>

                {/* Outgoing Message */}
                {messages.map((msg, index) => (
                    <Box display="flex" justifyContent="flex-end" mb={1}>
                        <Box sx={{ backgroundColor: '#c5a7ff', color: 'white', borderRadius: 2, padding: '8px 12px', maxWidth: '60%' }}>

                            {/* // <li key={index}></li> */}
                            <Typography variant="body2" key={index}>{msg}</Typography>

                            {/* <Typography variant="body2"></Typography> */}
                            <Typography variant="caption" color="textSecondary" display="flex" alignItems="center">
                                12:23 AM <CheckIcon sx={{ fontSize: 12, ml: 0.5 }} />
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ display: 'flex', position: "relative", alignItems: 'center', padding: 1, borderTop: '1px solid lightgray', backgroundColor: 'white' }}>
                <IconButton onClick={() => setShowEmoji((prev) => !prev)} >
                    <EmojiEmotionsIcon />
                </IconButton>
                <IconButton>
                    <PhotoIcon />
                </IconButton>
                <TextField
                    placeholder="Type something here"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ marginX: 1 }}
                    value={inputText}
                    onChange={handleInputChange}
                    onKeyPress={(e)=>e.key == "Enter" && handleSendMessage()}
                />
                <IconButton>
                    <SendIcon onClick={sendMessage} />
                </IconButton>
                {showEmoji && (
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <Box sx={{ position: 'absolute', bottom: '60px', left: '20px' }}>
                            <EmojiCopm setInputText={setInputText} />
                        </Box>
                    </ClickAwayListener>
                )}
            </Box>
        </Box>
    );
}
