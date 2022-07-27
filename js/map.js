export let map = L.map('map', { zoomControl: false }).setView(
  [37.7749, -122.431297],
  13
);

export let marker = L.marker([37.7749, -122.431297]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);
