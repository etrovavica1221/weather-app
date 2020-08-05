import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment'; 

const ForecastSummary = props => {
    let {date, temperature,  description, icon} = props;
    return(
    <span className="forecast-summary">
        <div className="date" data-testid="date-id">
        {Moment(date).format('ddd Do MMM')}
        </div>
        <div className="temperature" data-testid="temperature-id">
            {temperature}
        </div>
        <div className="description" data-testid="description-id">
            {description}
        </div>
        <div className="icon" data-testid="icon-id">
            <WeatherIcon data-testid="testIcon" name="owm" iconId={icon} flip="horizontal" rotate="90" />
        </div>
        {/* <button value={date} onClick={handleForecastSelect}>
            More Details
        </button> */}
    </span>
    );
};

ForecastSummary.propTypes = {
    date: PropTypes.number,
    temperature: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.any
}

export default ForecastSummary;