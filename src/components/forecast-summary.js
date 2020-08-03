import React from 'react';
import PropTypes from 'prop-types';

function ForecastSummary(props) {
    let {date, maxTemperature, minTemperature, description, icon} = props;
    return(
    <span className="forecast-summary">
        <div className="date">{date}</div>
        <div className="maxTemperature">{maxTemperature}</div>
        <div className="minTemperature">{minTemperature}</div>
        <div className="description">{description}</div>
        <div className="icon">{icon}</div>
    </span>
    )
}

ForecastSummary.propTypes = {
    date: PropTypes.any,
    maxTemperature: PropTypes.any,
    minTemperature: PropTypes.any,
    description: PropTypes.any,
    icon: PropTypes.any,
}

export default ForecastSummary;