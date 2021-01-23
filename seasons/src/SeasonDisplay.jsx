import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: 'sun'
  },
  winter: {
    text: `Burr, it's chilly!`,
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}
// Months 3-8 are Summer (northern hemisphere)
// Months 0-2 and 9-12 are Winter (northern hemisphere)


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, (new Date()).getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon ${iconName} massive loading`} />
      <i className={`icon-top icon ${iconName} massive loading`} />
      <h1>{text}</h1>
      <i className={`icon-bottom icon ${iconName} massive loading`} />
      <i className={`icon-right icon ${iconName} massive loading`} />
    </div>
  );
}

export default SeasonDisplay;