import { Typography, Box } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./LastNav.css";
import styled from '@emotion/styled';

export default function LastNav() {

    const Btn = styled(Button)`
       background-color:none;
       border-radius:20px;
       border:1px solid yellowgreen;
       color:green;
    `

    return (
        <div className='last-nav'>
            <div className='logo-div'>
                <SpaIcon /><p className='typo'>
                    Echofy
                </p>
            </div>

            <ul className='tools-div'>
                <li className='dropdown'>
                    <a href="#" className='home'>Home</a>
                   
                    <ul className='drop-down'>
                        <li>Environment Demo 01</li>
                        <li>Environment Demo 01</li>
                        <li>Environment Demo 01</li>
                        <li>Environment Demo 01</li>
                    </ul>
                </li> <KeyboardArrowDownIcon />
                &nbsp;&nbsp;
                <li>About</li>
                &nbsp;&nbsp;
                <li>Service</li><KeyboardArrowDownIcon />
                &nbsp;&nbsp;
                <li>Pages</li><KeyboardArrowDownIcon />
                &nbsp;&nbsp;
                <li>Blog</li><KeyboardArrowDownIcon />
                &nbsp;&nbsp;
                <li>Contact</li>

                &nbsp;&nbsp;  &nbsp;&nbsp;
                <SearchIcon />
                &nbsp;&nbsp;  &nbsp;&nbsp;
                <Btn className='btn'>Get A Quote</Btn>
                &nbsp;&nbsp;
            </ul>
        </div>
    )
}