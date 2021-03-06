import React from 'react';


const Navigation = ({ OnRouteChange, isSignedIn }) => {
    if(isSignedIn){
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
                <p className='f3 link dim white underline pa3 pointer' 
                    onClick={() => OnRouteChange('signout')}> 
                    Sign Out
                </p>
            </nav>
        );
    }
    else{
        return(
            <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
                <p className='f3 link dim white underline pa3 pointer' 
                    onClick={() => OnRouteChange('signin')}> 
                    Sign In
                </p>
                <p className='f3 link dim white underline pa3 pointer' 
                    onClick={() => OnRouteChange('register')}> 
                    Register
                </p>
            </nav>
        );
    }
      
        
}

export default Navigation;