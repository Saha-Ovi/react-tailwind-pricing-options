import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-3 hover:bg-amber-400' key={route.id}><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;