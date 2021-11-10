import React from 'react';
import './TeamCard.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const TeamCard = ({data, dp}) => {
    return(
        <div className='team-card'>
            <img src={dp} alt='shankrith' style={{height: '68%', width: '100%', objectFit: 'cover'}} />
            <h1 className='member-name'>{data}</h1>
            <h1 className='role-text' >PRESIDENT</h1>
            <h1 className='domain-spec' >Robotics</h1>
            <div>
            <GitHubIcon sx={{fontSize: 19}} onClick={() =>console.log('clicked!')} className='team-social-button gray' />
            <LinkedInIcon sx={{fontSize: 19}} onClick={() =>console.log('clicked!')} className='team-social-button gray' />
            <LanguageIcon sx={{fontSize: 19}} onClick={() =>console.log('clicked!')} className='team-social-button gray' />
            </div>
        </div>
    )
}

export default TeamCard;