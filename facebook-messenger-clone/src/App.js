import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  // useState = variable in REACT
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect (() => {
    // run once when the app component loads
    db.collection("messages").orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [input])

  // useEffect = run code on a condition
  useEffect(() => {
    // if its black inside [], this code runs only when page REFRESHES
    // if we have a variable, this code runs everytime variable changes

    setUsername(prompt("Please enter your name:"))

  }, []) // condition
  
  const sendMessage = (event) => {
    // all the logic to send a message goes
    event.preventDefault(); // disables page REFRESH

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello World</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <div className="app_input">
            <Input placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)} />
          </div>
          <div className="app_iconButton">
            <IconButton disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </div>
          
        </FormControl>
        
      </form>
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
