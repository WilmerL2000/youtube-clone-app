import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '993307e84emsh4329cbc9ead3704p1367dajsneed357cea7ea',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

/**
 * It takes a url as an argument, and returns the data from the API.
 * @param url - The URL of the API endpoint you want to call
 * @returns The data object from the axios response.
 */
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
