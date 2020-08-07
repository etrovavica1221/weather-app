import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './ForecastDetails';
import '../styles/app.css';


const App = props => {
const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);
const selectedForecast = props.forecasts.find(forecast => forecast.date === selectedDate);
const handleForecastSelect = (date) => {
    setSelectedDate(date);
};

    return(

        
    <span className="forecast">
        <LocationDetails
            city={props.location.city} 
            country={props.location.country}
        />
        
        <ForecastSummaries onForecastSelect={handleForecastSelect} forecasts={props.forecasts} />

        <ForecastDetails forecasts={selectedForecast} />
        

    </span>
    );
};

App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired,
};

export default App;