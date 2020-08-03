import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummary from './forecast-summary';

const App = props =>
<span>
<LocationDetails
    city={props.location.city} 
    country={props.location.country}
/>
{
    props.forecasts.map(f => 
        <ForecastSummary
        date={f.date}
        maxTemperature={f.temperature.max}
        minTemperature={f.temperature.min}
        description={f.description}
        icon={f.icon}
    />)
}
</span>

App.propTypes = {
    location: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
    }).isRequired,
    forecasts: PropTypes.array.isRequired
};

export default App;