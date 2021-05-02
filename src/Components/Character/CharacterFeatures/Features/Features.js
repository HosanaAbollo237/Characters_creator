import React from 'react'
import classes from './styleFeatures.module.css'
const features = (props) => {

    return(
        <div className="row">
            <div className={[classes.moins, classes.inline].join(' ')}></div>
                {props.children} : {props.nbPoints}
            <div className={[classes.plus, classes.inline].join(' ')}></div>

        </div>
    )
}

export default features;