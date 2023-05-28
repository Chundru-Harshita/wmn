import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { useNavigate } from 'react-router-dom';

function User({useri}) {

    const [isConnected, setConnected] = useState(false);
    const navigate = useNavigate();
    function click () {
        setConnected(true)
    }


    function click_profile() {
        navigate('/Profile');
    }

    function click_chat() {
        navigate('/Chat');
    }

    const ele = useri;

    return (
        <div className="container">
            <div className="card mt-5 mb-3 shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <img src={ele.imgurl}
                                className="card-img rounded-circle shadow-4-strong" width="40px" alt=""></img>
                        </div>
                        <div className="col-9">
                            <div className="display-6">{ele.name}</div>
                            <p className="card-text pt-2">{ele.desc}</p>
                            <br></br>
                            {/* <p>Contact No: {ele.phone}</p>
                            <p>Email Address: {ele.email}</p> */}
                            <div className="row" style={{marginTop: 7}}>
                <div className="col">
                    <IconButton>
                        <WhatsAppIcon />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookRoundedIcon />
                    </IconButton>
                    </div>
                    <div className="col mx-5" style={{textAlign: "right"}}>
                    {
                        isConnected == false?
                        (<button type="button" class="btn btn-primary" onClick={click}>Connect<span class="bi bi-plus-circle mx-1"></span></button>):
                        (<button type="button" class="btn btn-primary" onClick={click_chat}>Chat<span class="bi bi-chat mx-1"></span></button>)
                    }
                    <button type="button" class="mx-2  btn btn-primary" onClick={click_profile}>View Profile<span class="bi bi-plus-circle mx-1"></span></button>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
 
  );
}

export default User;
