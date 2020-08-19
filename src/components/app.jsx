import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './ForecastDetails';
import SearchForm from './SearchForm';
import '../styles/app.css';
import Notification from './Notification'


const App = () => {
const [location, setLocation] = useState({city: "", country: ""});
const [forecasts, setForecasts] = useState([]);
const [selectedDate, setSelectedDate] = useState(0);
const [searchText, setSearchText] = useState("");
const [showNotification, setShowNotification] = useState(false);
const [error, setError] = useState({}); 

useEffect(() => {
    async function fetchData() {
        const fetchedData = await axios.get( 
            "https://mcr-codes-weather.herokuapp.com/forecast"
        );
        setLocation(fetchedData.data.location);
        setForecasts(fetchedData.data.forecasts); 
    }
    fetchData();
}, []);

const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

const handleForecastSelect = (date) => {
    setSelectedDate(date);
};

const handleInputChange = (e) => {
    setSearchText(e.target.value);
};

const changeLocation = (e) => {
    e.preventDefault();
    async function fetchData() {
        await axios
        .get( 
            `https://mcr-codes-weather.herokuapp.com/forecast?city=${searchText}`
        )
        .then((res) => {
            setLocation(res.data.location);
            setForecasts(res.data.forecasts); 
        })
        .catch((error) => {
            setShowNotification(true);
            setError(error.response.status ? error.response.status : "none");
        })      
    }
    fetchData();
    setSearchText('');
}  



    return(      
    <span className="forecast">
        <LocationDetails
            city={location.city} 
            country={location.country}
        />

        <SearchForm 
            value={searchText}
            handleSearch={handleInputChange}
            changeLocation={changeLocation}
        />

        <Notification isVisible={showNotification} error={error} />
        
        <ForecastSummaries onForecastSelect={handleForecastSelect} forecasts={forecasts} />

        {
            selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
        }

    </span>
    );
};

export default App;