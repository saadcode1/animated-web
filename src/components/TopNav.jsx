import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Typography } from '@mui/material';
import "./TopNav.css";

export default function TopNav(){
    return(
        <div className="top-nav">
            <div className='chiled-nav'>
            <LocationOnIcon style={{color:"white"}}/>&nbsp;&nbsp; <Typography>102/B New Market, Sandigo-USA</Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <EmailIcon style={{color:"white"}}/> &nbsp;&nbsp;<Typography>example@gmail.com</Typography>
                </div>
                 <div className='social'>
                 <CallIcon style={{color:"white"}}/>&nbsp;&nbsp; <Typography className='telephone' >+123 (4567) 890</Typography>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <span><FacebookIcon style={{color:"white"}}/></span>
               &nbsp;&nbsp;
               <span><XIcon style={{color:"white"}}/></span>
               &nbsp;&nbsp;
               <span><LinkedInIcon style={{color:"white"}}/></span>
               &nbsp;&nbsp;
               <span><PinterestIcon style={{color:"white"}}/></span>
                 </div>
                 <hr/>
             </div>
        
    )
    }