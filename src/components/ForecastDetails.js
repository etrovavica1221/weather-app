import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const ForecastDetails = ({forecasts}) => {
    let { date, temperature, humidity, wind } = forecasts;
    return(
        <span>
            <div>
                {Moment(date).format('ddd Do MMM')}
            </div>
            <div>
                {temperature.max}&deg;c
            </div>
            <div>
                {temperature.min}&deg;c
            </div>
            <div>
                {humidity}
            </div>
            <div>
                {wind.speed}
            </div>
            <div>
                {wind.direction}
            </div>
        </span>
    
    ); 
};

ForecastDetails.propTypes = {
    date: PropTypes.any,
    temperature: PropTypes.any,
    humidity: PropTypes.number,
    wind: PropTypes.any,
}

export default ForecastDetails;