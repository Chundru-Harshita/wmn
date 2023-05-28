import React, { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import User from "./User"

function Users() {

    const [isConnected, setConnected] = useState(false);
    function click () {
        setConnected(true)
    }

    const [users, setusers] = useState([
        {
            'imgurl': 'https://turinghut.org/static/9384c958bbd95db9f010ee70a3bdaee1/30cdc/turinghut_logo.png',
            'name':'Turing Hut',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'turinghut@gmail.com'
        },
        {
            'imgurl':'https://klecet.edu.in/assets/admin/ckeditor/kcfinder/upload/images/csi-logo-300x300.png',
            'name':'CSI',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'csiindia@gmail.com'
        },
        {
            'imgurl':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj92UzpcNh8gvuPWNapxP6wdjXQ5Xm4NuDVI22E7s&s',
            'name':'EDCell',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'ecell@gmail.com'
        },
        {
            'imgurl':'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/1200px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png',
            'name':'ACM',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'acm@gmail.com'
        },
    ]);

    return (
        <div className="container">

            {

                users.map((ele) => <User useri={ele}/>)

            }
        </div>    
 
  );
}

export default Users;
