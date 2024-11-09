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
import moment from 'moment';

const socket = io('https://nodechatsoket-io-2.onrender.com'); // Adjust to your backend URL

export default function ChatWindow() {
    const [showEmoji, setShowEmoji] = useState(false);
    const [inputText, setInputText] = useState("");
    const [connectionId, setConnectionId] = useState(null);
    const [messages, setMessages] = useState([]);

    const handleClickAway = () => {
        if (showEmoji) setShowEmoji(false);
    };

    useEffect(() => {
        socket.on('connectionId', (id) => {
            setConnectionId(id);
            // console.log('Connection ID:', id);
        });

        socket.on('message', (message) => {
            setMessages(prevMessages => [message, ...prevMessages]);
            // console.log('Received message:', message);
        });

        return () => {
            socket.off('connectionId');
            socket.off('message');
        };
    }, []);

    const handleSendMessage = () => {
        if (inputText.trim()) {
            const timeSent = moment().format('hh:mm A');
            const messageObject = { text: inputText, time: timeSent };
            socket.emit('user-message', messageObject);
            setInputText(""); // Clear input after sending
        }
    };
    // console.log("ccxzcxzcz", messages)
    return (
        <Box sx={{
            height: { xs: 'calc(100vh - 168px)', md: 'calc(100vh - 112px)' },
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
            border: '1px solid lightgray'
        }}>

            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', padding: { xs: 1, md: 2 }, backgroundColor: 'white', borderBottom: '1px solid lightgray' }}>
                <IconButton sx={{ fontSize: { xs: '20px', md: '24px' } }}>
                    <ArrowBackIcon />
                </IconButton>
                <Avatar src="/path-to-avatar.jpg" alt="User" sx={{ marginRight: 1, width: { xs: 30, md: 40 }, height: { xs: 30, md: 40 } }} />
                <Box flex={1}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.9rem', md: '1rem' } }}>User Name</Typography>
                    <Typography variant="caption" color="textSecondary" sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }}>Last seen 07 Oct 2024 at 01:52pm</Typography>
                </Box>
                <IconButton sx={{ fontSize: { xs: '20px', md: '24px' } }}>
                    <MoreVertIcon />
                </IconButton>
            </Box>

            {/* Chat Area */}
            <Box sx={{
                flex: 1,
                padding: { xs: 1, md: 2 },
                overflow: 'auto',  // Change from overflowY: 'auto' to overflow: 'auto'
                position: 'relative',  // Add position: relative
                display: 'flex',  // Add display: flex
                flexDirection: 'column-reverse',  // Add flex-direction: column-reverse
                width: '100%',  // Set width to 100%
                backgroundColor: '#f5f5f5'
            }}>
                {/* <Typography align="center" variant="caption" color="textSecondary" sx={{ marginBottom: 1, backgroundColor: '#e0e0e0', borderRadius: 1, display: 'inline-block', padding: '2px 4px', fontSize: { xs: '0.7rem', md: '0.8rem' } }}>
                    16/05/2024
                </Typography> */}

                {messages.map((msg, index) => (
                    <Box key={index} display="flex" justifyContent="flex-end" mb={1} >
                        <Box sx={{ backgroundColor: '#c5a7ff', color: 'white', borderRadius: 2, padding: '8px 12px', maxWidth: '60%' }}>

                            {/* // <li key={index}></li> */}
                            <Typography variant="body2" key={index}>{msg.text}</Typography>

                            {/* <Typography variant="body2"></Typography> */}
                            <Typography variant="caption" color="textSecondary" display="flex" alignItems="center">
                                {msg.time} <CheckIcon sx={{ fontSize: 12, ml: 0.5 }} />
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Message Input */}
            <Box sx={{ display: 'flex', position: "relative", alignItems: 'center', padding: { xs: 1, md: 1.5 }, borderTop: '1px solid lightgray', backgroundColor: 'white' }}>
                <IconButton onClick={() => setShowEmoji(prev => !prev)} sx={{ fontSize: { xs: '20px', md: '24px' } }}>
                    <EmojiEmotionsIcon />
                </IconButton>
                <IconButton sx={{ fontSize: { xs: '20px', md: '24px' } }}>
                    <PhotoIcon />
                </IconButton>
                <TextField
                    placeholder="Type something here"
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{ marginX: 1, '& .MuiOutlinedInput-root': { fontSize: { xs: '0.8rem', md: '1rem' } } }}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <IconButton onClick={handleSendMessage} sx={{ fontSize: { xs: '20px', md: '24px' } }}>
                    <SendIcon />
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
