import React from 'react'

const TitleH1 = (props) => 
{   
    return(
        <h1 className="border border-dark bg-primary p-2 m-2 rounded text-white">{props.children}</h1>
    )
}

export default TitleH1;
