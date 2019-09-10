import './SeasonDisplay.css';
import React from 'react';


const seasonsConfig = {
    summer : {
        text : "Let go to beach",
        iconName: 'sun'
    },
    winter : {
        text : "Its cold",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonsDisplay = (props) => {

    const seasons = getSeason(props.lat, new Date().getMonth());
    const icon = seasons === 'winter' ? 'snowflake' : 'sun';
    const {text, iconName} = seasonsConfig[seasons];
    console.log({text, iconName});

    return <div className={`season-display ${seasons}`}> 
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text} </h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
};

export default SeasonsDisplay;