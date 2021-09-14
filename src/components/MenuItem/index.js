import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon  } from './styled';

export default ({link, icon}) => {

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname == link;

    const handleLinkClick = e => {
        e.preventDefault();
        history.push( link );
    }

    return(
        <LinkArea href={link} active={isActive} onClick={handleLinkClick} >
            <LinkIcon src={icon} />
        </LinkArea>
    );
}