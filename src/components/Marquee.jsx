import "./Marquee.css";
import { delay, motion } from "framer-motion";
import SpaIcon from '@mui/icons-material/Spa';
export default function Marquee(){
    return(
         <div className="marquee-div">
         <div
          
         className="chiled-marquee">
         <motion.h1
           initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
         >
        <SpaIcon/>
        &nbsp;&nbsp;
        Ocean-Cleaning
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Ocean-Cleaning
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Ocean-Cleaning
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
         </motion.h1>
         <motion.h1
           initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
         >
       &nbsp;&nbsp; 
       <SpaIcon/>
       &nbsp;&nbsp; 
       Ocean-Cleaning
       &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Ocean-Cleaning
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Ocean-Cleaning
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Animal-protection
        &nbsp;&nbsp;
        <SpaIcon/>
        &nbsp;&nbsp;
        Environmental
        &nbsp;&nbsp;
         </motion.h1>
        </div>
        
         </div>
    )
}