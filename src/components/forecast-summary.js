import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import Moment from 'moment'; 
import '../styles/forecast-summary.css';

const ForecastSummary = props => {
    let {date, temperature,  description, icon} = props;
    return(
    <span className="forecast-summary">
        <div className="date" data-testid="date-id">
            {Moment(date).format('ddd Do MMM')}
        </div>
        <div className="temperature" data-testid="temperature-id">
            {temperature}&deg;c
        </div>
        <div className="description" data-testid="description-id">
            {description}
        </div>
        <div className="icon" data-testid="icon-id">
            <WeatherIcon data-testid="testIcon" name="owm" iconId={icon} flip="horizontal" rotate="90" />
        </div>
        <button onClick={() => props.onSelect(props.date)}>
            More Details
        </button>
    </span>
    );
};

ForecastSummary.propTypes = {
    date: PropTypes.number,
    temperature: PropTypes.any,
    description: PropTypes.string,
    icon: PropTypes.any,
    onSelect: PropTypes.func
}

export default ForecastSummary;