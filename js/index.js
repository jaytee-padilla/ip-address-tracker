// modules
import 'dotenv/config';

// HTML elements
const ipAddressEl = document.getElementById('ip-address-input');
const searchButtonEl = document.querySelector('.search-btn');

// vars
const ApiKey = process.env.API_KEY;

const getIpGeolocation = async () => {
  const ipAddress = ipAddressEl.value;

  const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${ApiKey}&ipAddress=${ipAddress}`)
    .then(res => {
      if (!res.ok) {
        const message = `An error has occurred: ${res.status} ${res.statusText}`
        throw new Error(message);
      }
      
      const data = res.json()
      return data;
    })

  console.log(response);
  return response;
}

searchButtonEl.addEventListener('click', getIpGeolocation);