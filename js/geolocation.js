// modules
import 'dotenv/config';
const states = require('us-state-converter');

// HTML elements
const ipAddressEl = document.getElementById('ip-address-input');
const searchButtonEl = document.querySelector('.search-btn');
const ipResultEl = document.querySelector('.ip-result');
const ipLocationResultEl = document.querySelector('.ip-location-result');
const ipTimezoneResultEl = document.querySelector('.ip-timezone-result');
const ipIspResultEl = document.querySelector('.ip-isp-result');

// vars
const ApiKey = process.env.API_KEY;

// functions
const handleFetchError = (res) => {
  if (!res.ok) {
    const message = `An error has occurred: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }
};

const renderGeolocation = (data) => {
  let stateAbbreviation = states.abbr(data.location.region);

  // Don't abbreviate regions outside of the US
  if (stateAbbreviation === 'No abbreviation found with that state name') {
    stateAbbreviation = data.location.region;
  }

  ipResultEl.textContent = data.ip;
  ipLocationResultEl.textContent = `${data.location.city}, ${stateAbbreviation} ${data.location.postalCode}`;
  ipTimezoneResultEl.textContent = `UTC ${data.location.timezone}`;
  ipIspResultEl.textContent = data.isp;
};

const getGeolocation = async () => {
  const ipAddress = ipAddressEl.value;

  if (!ipAddress) {
    throw new Error('Must enter an IP Address into the search field');
  }

  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${ApiKey}&ipAddress=${ipAddress}`
  ).then((res) => {
    handleFetchError(res);

    const data = res.json();
    return data;
  });

  renderGeolocation(response);
};

searchButtonEl.addEventListener('click', getGeolocation);