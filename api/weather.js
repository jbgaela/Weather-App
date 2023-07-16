import axios from "axios";
import { API_KEY } from "../constants";

const forecaseEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.cityName}`

const apiCall = async (endpoint) => {
    const options ={
        method: 'GET',
        url: endpoint,
    }
    try {
        const response = await axios(options);
        return response.data;
        
    } catch (err) {
        console.log('error',err)
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecaseEndpoint(params))
}

export const fetchLocations = params => {
    return apiCall(locationsEndpoint(params))
}