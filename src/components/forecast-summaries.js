import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.css';

const ForecastSummaries = props => (
    <div className="forecast-summaries">
        {
            props.forecasts.map(forecast => (
                <ForecastSummary
                    key={forecast.date}
                    date={forecast.date}
                    description={forecast.description}
                    icon={forecast.icon}
                    temperature={forecast.temperature.max}
                    onSelect={props.onForecastSelect}
                />
            ))

        }
    </div>
);

ForecastSummaries.propTypes = {
    date: PropTypes.any,
    temperature: PropTypes.any,
    description: PropTypes.string,
    icon: PropTypes.any,
    onSelect: PropTypes.func
}

export default ForecastSummaries; 