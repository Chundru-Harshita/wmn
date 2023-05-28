import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';

export default function Sponsor() {

    const [sponsor, setsponsor] = useState([
        {
            'imgurl': 'https://play-lh.googleusercontent.com/JhovLWCdYTgqip2F-D7N-9tqjv8NdE8Cqr-FNOQx31_E7JSY7pI1ZsbplQRDeyUCEDY=w240-h480-rw',
            'name':'Coinfolio',
            'desc':'CoinFolio lets you create your Crypto Portfolio and keep an eye on all important data and tracking coins with ease.',
            'phone':'+919872362435',
            'email':'turinghut@gmail.com',
            'tag': 'blockchain'
        },
        {
            'imgurl':'https://cryptologos.cc/logos/polygon-matic-logo.png',
            'name':'Polygon',
            'desc':'Polygon is the most proven way to build and scale your decentralized application and projects on Ethereum, the world\'s largest blockchain ecosystem.',
            'phone':'+919872362435',
            'email':'csiindia@gmail.com',
            'tag': 'hackathons',
            'sec': 'blockchain'
        },
        {
            'imgurl':'https://imagedelivery.net/L-RRwTsGtjw4XmStu9Y7XA/ecec048f-d26f-4a71-78a2-d7d269a78a00/public',
            'name':'Smart Interviews',
            'desc':'Smart Interviews is an ed-tech platform that helps coders to crack their dream job by providing comprehensive courses like Smart Coder (DSA).',
            'phone':'+919872362435',
            'email':'ecell@gmail.com',
            'tag': 'coding contests'
        },
        {
            'imgurl':'https://images-platform.99static.com/ge1lbPkzPM2vO3vCzXViKLomTGc=/500x500/top/smart/99designs-contests-attachments/5/5501/attachment_5501341',
            'name':'Study Abroad',
            'desc':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam exobcaecati molestiaesequi magni odit sapiente autem ea doloremque natusaliquid dolor cupiditate inventore corrupti nam?',
            'phone':'+919872362435',
            'email':'acm@gmail.com',
            'tag': 'Consultancy'
        },
    ]);


    return (
        <div className="container">
            <div className="card-group mt-5">

                {
                    sponsor.map((ele) => <div className="col-2 card shadow m-2">
                    <img src={ele.imgurl} alt=""
                        width="100%" height="250px" />
                    <div className="card-body">
                        <h5>{ele.name}</h5>
                        <p>{ele.desc}</p>
                    </div>
                    <Stack direction="row" spacing={1} className='pb-1 px-2'>
                        <Chip label={ele.tag} color="primary" variant="outlined" />
                        {
                            ele.sec != null ?
                            <Chip label={ele.sec} color="primary" variant="outlined" />:
                            <div></div>
                        }
                    </Stack>
                    <div className="card-footer">
                        
                    <button type="button" className="btn btn-primary d-block mx-auto" >Connect<span class="bi bi-plus-circle mx-1"></span></button>
                    </div>
                </div>)
                }
            
            </div>
        </div>
    );
}