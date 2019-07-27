import React from 'react';


const Home=()=>{

    const jwt=localStorage.getItem("cool-jwt");
console.log('jwt::::',jwt);
    

    return (<div>
        Hello World
    </div>)
};


export default Home;