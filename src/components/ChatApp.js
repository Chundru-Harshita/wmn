import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  sendButton: {
    marginLeft: '10px',
  },
});

const ChatApp = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [turingHutMessage, setTuringHutMessage] = useState('');
  const [acmMessage, setAcmMessage] = useState('');

  const handleSendMessage = (sender, message) => {
    const timestamp = new Date().toLocaleTimeString();
    const newMessage = { sender, content: message, timestamp };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const handleMessageSendByTuringHut = () => {
    handleSendMessage('TuringHut', turingHutMessage);
    setTuringHutMessage('');
  };

  const handleMessageSendByAcm = () => {
    handleSendMessage('Acm', acmMessage);
    setAcmMessage('');
  };

  return (
    <div className='m-3'>
      <Grid container className='mb-2'>
        <Grid item xs={12}>
          <Typography variant="h5" className="header-message">
            Chat
          </Typography>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key="RemySharp">
              <ListItemIcon>
                <Avatar alt="Turing Hut" src="https://turinghut.org/static/9384c958bbd95db9f010ee70a3bdaee1/30cdc/turinghut_logo.png" />
              </ListItemIcon>
              <ListItemText primary="Turing Hut" />
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
          </Grid>
          <Divider />
          <List>
            <ListItem button key="Acm">
              <ListItemIcon>
                <Avatar alt="Acm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png" />
              </ListItemIcon>
              <ListItemText primary="Acm" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {messages.map((message, index) => (
              <ListItem key={index}>
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText align={message.sender === 'TuringHut' ? 'right' : 'left'} primary={message.content} />
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText align={message.sender === 'TuringHut' ? 'right' : 'left'} secondary={message.timestamp} />
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Grid container className='px-3'>
            <Grid item xs={5} className={classes.inputContainer}>
              <TextField
                id="acm-message-input"
                label="Acm's Message"
                fullWidth
                value={acmMessage}
                onChange={(e) => setAcmMessage(e.target.value)}
              />
              <Fab
                className={classes.sendButton}
                color="primary"
                aria-label="add"
                onClick={handleMessageSendByAcm}
              >
                <SendIcon />
              </Fab>
            </Grid>
            <Grid item xs={2} className={classes.inputContainer}>
            </Grid>
            <Grid item xs={5} className={classes.inputContainer}>
              <TextField
                id="turingHut-message-input"
                label="Turing Hut's Message"
                fullWidth
                value={turingHutMessage}
                onChange={(e) => setTuringHutMessage(e.target.value)}
              />
              <Fab
                className={classes.sendButton}
                color="primary"
                aria-label="add"
                onClick={handleMessageSendByTuringHut}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatApp;