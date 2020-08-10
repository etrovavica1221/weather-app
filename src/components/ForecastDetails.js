import React from 'react';
import Moment from 'moment';
import '../styles/app.css';

const ForecastDetails = ({forecast}) => {
    let { date, temperature, humidity, wind } = forecast;
    return(
        <span id='forecastDetails'>
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
                {humidity}%
            </div>
            <div>
                {wind.speed}mph
            </div>
            <div>
                {wind.direction}
            </div>
        </span>
    
    ); 
};

export default ForecastDetails;