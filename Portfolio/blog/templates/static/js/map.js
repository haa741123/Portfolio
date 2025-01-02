var map = L.map("map").setView([37.5665, 126.978], 3);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

var visitedCities = [
  { name: "서울", lat: 37.5665, lng: 126.978 },
  { name: "도쿄", lat: 35.6762, lng: 139.6503 },
  { name: "뉴욕", lat: 40.7128, lng: -74.006 },
];

visitedCities.forEach(function (city) {
  L.marker([city.lat, city.lng]).addTo(map).bindPopup(city.name);
});
