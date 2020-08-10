import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './ForecastDetails';
import SearchForm from './SearchForm';
import '../styles/app.css';


const App = () => {
const [location, setLocation] = useState({city: "", country: ""});
const [forecasts, setForecasts] = useState([]);
const [selectedDate, setSelectedDate] = useState(0);
const [searchText, setSearchText] = useState("");

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
            "https://mcr-codes-weather.herokuapp.com/forecast"
        )
        .then((res) => {
            setLocation(res.data.location);
            console.log(res.data.location);
            setForecasts(res.data.forecasts); 
        })
        .catch((error) => {
            if (error.res.status === 500) {
                throw new Error('Sorry! The Weather App is down. Please try later.');
            } else if (error.res.status === 404) {
                throw new Error('The location is not found.');
            } else {
                throw new Error('Ooops.Something went wrong!')
            }
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
        
        <ForecastSummaries onForecastSelect={handleForecastSelect} forecasts={forecasts} />

        {
            selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
        }

    </span>
    );
};

export default App;