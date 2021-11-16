import React from 'react';
import './TeamCard.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const TeamCard = ({data, idx}) => {
    return(
        <div className='team-card' key={idx}>
            <img src={data.dp ? data.dp : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt={data.name} style={{height: '68%', width: '100%', objectFit: 'cover'}} />
            <h1 className='member-name'>{data.name}</h1>
            <h1 className='role-text' >{data.role}</h1>
            {data.domain && <h1 className='domain-spec' >{data.domain}</h1>}
            <div style={{/*position: 'absolute', bottom: '0'*/}} >
                {data.github && <a href={data.github} rel="noopener noreferrer" target="_blank" ><GitHubIcon sx={{fontSize: 19}} className='team-social-button gray' /></a>}
                {data.linkedin && <a href={data.linkedin} rel="noopener noreferrer" target="_blank" ><LinkedInIcon sx={{fontSize: 19}} className='team-social-button gray' /></a>}
                {data.web && <a href={data.web} rel="noopener noreferrer" target="_blank" ><LanguageIcon sx={{fontSize: 19}} className='team-social-button gray' /></a>}
            </div>
        </div>
    )
}

export default TeamCard;