import React from 'react';


const Navigation = ({ OnRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
            <p className='f3 link dim white underline pa3 pointer' 
                 onClick={()=>OnRouteChange('signin')}
            > Sign Out</p>
        </nav>
    );
}

export default Navigation;