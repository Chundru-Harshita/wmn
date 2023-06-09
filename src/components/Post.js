import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, green } from "@mui/material/colors";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import AdjustIcon from '@mui/icons-material/Adjust';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Box } from "@mui/material";
import LinkIcon from '@mui/icons-material/Link';


const dateUtil = (timestamp) => {
  var date = new Date(timestamp);
  var now = new Date();

  // Get the time difference in milliseconds
  var timeDiff = now.getTime() - date.getTime();

  // Calculate the number of milliseconds in a day
  var oneDay = 24 * 60 * 60 * 1000;

  var formattedDateTime;

  if (timeDiff < oneDay) {
    // Less than a day ago, display "yesterday" or "today"
    var options = { day: 'numeric', month: 'short', year: 'numeric' };
    var dateFormatter = new Intl.DateTimeFormat('en-US', options);

    if (date.getDate() === now.getDate() - 1) {
        formattedDateTime = 'Yesterday';
      } else if (date.getDate() === now.getDate()) {
        formattedDateTime = 'Today';
      } else {
        // Fallback to dd/mm/yy hh:mm for recent dates that are not yesterday or today
        formattedDateTime = dateFormatter.format(date);
      }
      formattedDateTime += ' ' + date.toLocaleTimeString('en-GB').slice(0,5)
  } else {
    // Older dates, display in dd/mm/yy hh:mm format
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString().slice(-2);
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');

    formattedDateTime = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
  }

  return formattedDateTime; // Output: 28/05/23 02:38

}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post({title, description, created_at, organizer, image}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const imgsrc = image;

  var formattedTime = dateUtil(created_at);


  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <Card sx={{ width: "40%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {organizer.name[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          align="left"
          title={organizer.name}
          subheader={formattedTime}
        />
        
        <CardContent>
          <Typography variant="h6" component="h1" color="text.primary">
            {title}
          </Typography>
          {/* <Typography style={{ color: "green", marginLeft: "90%"}}>
            <AdjustIcon sx={{p: 0.3, m:0.2}}></AdjustIcon>Live
          </Typography> */}
        </CardContent>
        <CardMedia
          component="img"
          height="350"
          image={imgsrc}
          alt="Paella dish"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="shareIcons">
            <WhatsAppIcon sx={{ m: 0.5 }}></WhatsAppIcon>
            <TwitterIcon sx={{ m: 0.5 }}></TwitterIcon>
            <InstagramIcon sx={{ m: 0.5 }}></InstagramIcon>
            <FacebookRoundedIcon sx={{ m: 0.5 }}></FacebookRoundedIcon>
          </IconButton>
          <Box style={{ marginLeft: "auto"}}>
          <Tooltip
            placement="top"
            title="Register"
            arrow
            sx={{p:1, m:2}}
          >
            <Link to={`https://unstop.com/o/ue5gaLR?lb=MF8vPuG`} >
              <LinkIcon sx={{mb:0.1}}></LinkIcon>
            </Link>
          </Tooltip>
          <Tooltip
            placement="top"
            title="Stats"
            arrow
            sx={{p:1, m:1}}
          >
            <Link to={`/stats/turingCup`}  >
              <EqualizerIcon sx={{mb:0.1}}></EqualizerIcon>
            </Link>
          </Tooltip>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
          </Box>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {description}
              {/* We are thrilled to announce that Turing Hut, the coding club of VNR
              VJIET is conducting a national-level coding contest - TURING CUP.
              The contest will be conducted in three
              rounds. 
              <Typography>First Round - 11th March, 2023</Typography>
              <Typography>Second Round -25th March 2023</Typography>
              <Typography>Third Round - 25th March 2023</Typography>
              The second round and the third round will be held
              on-site, which will be conducted in the VNR VJIET
              campus, Hyderabad. Accommodation will be provided for teams whose
              college is not located in Hyderabad. The contest is open to all the
              undergraduate students from across the country who are passionate
              about coding. We encourage you to participate in the contest and
              showcase your talent. To participate in the contest, you need to
              register yourself at Unstop. The registration for the first round
              will be open until March 8th, 2023. The first round will be
              conducted online, and the registered participants will receive
              further instructions via email.
            </Typography>
            <Typography paragraph>
              We urge you to register for the contest and showcase your coding
              skills to the nation. It's an excellent opportunity for you to
              learn, network, and grow in your career. To know more:
              https://turinghut.org/turingcup Register here:
              https://unstop.com/o/ue5gaLR?lb=MF8vPuG
            </Typography> */}
            {/* <Typography paragraph>
            Happy coding, Team Turing Hut. */}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  )
}