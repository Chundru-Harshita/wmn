import React, { useState, useEffect, useRef } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@material-ui/core";
import { EVENTS, INSERT_EVENT } from '../queries';

import { useMutation } from "@apollo/client";
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';



function NewPost() {
    const [eventTitle, setEventTitle] = useState('');
    const [orgName, setOrgName] = useState('');
    const [eventStartDate, setEventStartDate] = useState('');
    const [eventEndDate, setEventEndDate] = useState('');
    const [eventDescription,setEventDescription ] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventLink, setEventLink] = useState('');
    const [eventPoster, setEventPoster] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [eventObj, setEventObj] = useState(['']);
    const [progress, setProgress] = useState(0);

    const [insertEvent] = useMutation(INSERT_EVENT)

    const uploadFiles = (file) => {
      console.log("yooooo", file)
      if(!file) return;
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on("state_changed", (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      }, (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          console.log(url)
          insertEvent({
            variables: {
                title: eventTitle,
                description: eventDescription,
                location: eventLocation,
                expiry_date: eventEndDate,
                registration_link: eventLink,
                image: url,
            },
            refetchQueries: [{
                query: EVENTS
            }]
          })

          // Reset the form fields after submission
          setEventTitle('');
          setOrgName('');
          setEventStartDate('');
          setEventEndDate('');
          setEventLocation('');
          setEventDescription('');
          setEventLink('');
          setEventPoster(null);
          setIsSubmitted(false);
          setEventObj(null);
        })
      })
    };
   
    const handleSubmit = (e) => {
        e.preventDefault();

        //use the values for apis
        console.log(eventTitle);
        console.log(orgName);
        console.log(eventStartDate);
        console.log(eventEndDate);
        console.log(eventLocation);
        console.log(eventDescription);
        console.log(eventLink);
        console.log(eventPoster);

        console.log(eventPoster)
        uploadFiles(eventPoster)       

        //alert message to display successful submission
        setIsSubmitted(true);
        setTimeout(()=>{
            setIsSubmitted(false)
        }, 2000);

        console.log(setIsSubmitted);
    }

    useEffect(()=>{
        const object = [eventTitle, orgName, eventStartDate, eventEndDate, eventLocation, eventDescription, eventLink, eventPoster];
        console.log(object);

        setEventObj(object);
        console.log(eventObj);

        },eventObj)
        

    
  return (
    <>
    <Container sx={{ width: "200" }}>
      <Box
        sx={{
        width: "75%", 
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        margin: "1rem",
        marginLeft: "10rem",
        backgroundColor: "#ffffff",
        padding: "2rem",
        paddingRight: "16rem"
        }}
        
      >
        <Typography component="h1" variant="h5">
          Event Details
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit}>
        <TextField
            label="Event Title"
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            margin="normal"
            fullWidth
            required
          />
          <br/><br/>
          <TextField
            label="Event Description"
            type="text-area"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
          <br/><br/>
           <TextField
                label="Event Expiry Date"
                type="datetime-local"
                value={eventEndDate}
                onChange={(e) => setEventEndDate(e.target.value)}
                InputLabelProps={{
                    shrink: true
                }}
                required
                fullWidth
                margin="normal"
            />
          <br/><br/>
          <TextField
            label="Event Location"
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            InputLabelProps={{
                shrink: true
            }}
            margin="normal"
            fullWidth
            required
          />
          <br/><br/>
          <TextField
            label="Registration Link"
            type="text"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
            fullWidth
            InputLabelProps={{
                shrink: true
            }}
            required
          />
          <br/><br/>
          <FormControl margin="normal" fullWidth>
           <FormLabel required>Upload Poster</FormLabel>
            <Input 
               type="file" 
               required 
               onChange={(e) => setEventPoster(e.target.files[0])}
               />
          </FormControl>
          <Typography variant="body2" fontStyle="italic" fontWeight="light">
            Uploaded {progress} %
          </Typography>

        
          <div className='mt-2'>
            {isSubmitted && (
                <div className="alert alert-success mt-3" role="alert">
                Event submitted successfully!
                </div>
            )}
        </div>
          <Button type="submit" variant="contained" color="primary" className='mt-3'
            disabled={!eventTitle || !eventEndDate || !eventLocation || !eventDescription || !eventLink || !eventPoster}
            >
            Submit
          </Button>
    
        </Box>
      </Box>
    </Container>
           
    </>
  )
}

export default NewPost