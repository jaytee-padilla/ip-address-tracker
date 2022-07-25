// modules
import 'dotenv/config';
const states = require('us-state-converter');
import { map, marker } from './map';

// HTML elements
const ipAddressEl = document.getElementById('ip-address-input');
const searchBarEl = document.querySelector('.search-bar');
const ipResultEl = document.querySelector('.ip-result');
const ipLocationResultEl = document.querySelector('.ip-location-result');
const ipTimezoneResultEl = document.querySelector('.ip-timezone-result');
const ipIspResultEl = document.querySelector('.ip-isp-result');

// vars
const ApiKey = process.env.API_KEY;
let geolocationData = {};

// functions
const handleFetchError = (res) => {
  if (!res.ok) {
    const message = `An error has occurred: ${res.status} ${res.statusText}`;
    throw new Error(message);
  }
};

const getGeolocation = async () => {
  const ipAddress = ipAddressEl.value;

  if (!ipAddress) {
    throw new Error('Must enter an IP Address into the search field');
  }

  geolocationData = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${ApiKey}&ipAddress=${ipAddress}`
  ).then((res) => {
    handleFetchError(res);

    const data = res.json();
    return data;
  });
};

const renderMapLocation = () => {
  map.panTo(
    new L.LatLng(geolocationData.location.lat, geolocationData.location.lng)
  );

  marker.setLatLng([
    geolocationData.location.lat,
    geolocationData.location.lng,
  ]);
};

const renderGeolocation = async (event) => {
  event.preventDefault();

  await getGeolocation();

  let stateAbbreviation = states.abbr(geolocationData.location.region);

  // Don't abbreviate regions outside of the US
  if (stateAbbreviation === 'No abbreviation found with that state name') {
    stateAbbreviation = geolocationData.location.region;
  }

  ipResultEl.textContent = geolocationData.ip;
  ipLocationResultEl.textContent = `${geolocationData.location.city}, ${stateAbbreviation} ${geolocationData.location.postalCode}`;
  ipTimezoneResultEl.textContent = `UTC ${geolocationData.location.timezone}`;
  ipIspResultEl.textContent = geolocationData.isp;

  renderMapLocation();
};

searchBarEl.addEventListener('submit', renderGeolocation);
