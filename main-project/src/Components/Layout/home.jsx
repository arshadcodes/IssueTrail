import React, { useState,  } from 'react';
import Landingpage from './Landingpage.jsx';
import OrgsANDprojects from './OrgsANDprojects';


const Home = ({orglength}) => {
    return (
        <div className='text-white'>
            <Landingpage  /> 
            <OrgsANDprojects orglength={orglength}/>
        </div>

    );
};

export default Home;
