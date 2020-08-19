import React from 'react';
import Moment from 'moment';
import '../styles/ForecastDetails.css';

const ForecastDetails = ({forecast}) => {
    let { date, temperature, humidity, wind } = forecast;
    return(
        <div id='forecastDetails'>
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
        </div>    
    ); 
};

export default ForecastDetails;