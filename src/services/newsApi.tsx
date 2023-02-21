import axios from "axios";
import { INews } from "../models/INews";

const CurrentsAPI = require('currentsapi');
//import { CurrentsAPI } from 'currentsapi';
const currentsapi = new CurrentsAPI('YOUR_API_KEY');

currentsapi.search({
    keywords: 'Trump',
    language: 'en',
    country: 'US'
})

export const getNews = async () => {
    //let response = await axios.get("https://api.currentsapi.services/v1/latest-news");
    //console.log (response.data);
    //return response.data; 
    let response = await currentsapi.search({
          keywords: 'Trump',
          language: 'en',
          country: 'US'
        });

        console.log(response);
        
}