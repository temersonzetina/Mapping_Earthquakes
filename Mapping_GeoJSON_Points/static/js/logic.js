// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/temersonzetina/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

    // L.geoJson(airportData).then(function(data) {
    // We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    //   console.log(feature);
    //   return L.marker(latlng)
    //   .bindPopup("<h2>" + feature.properties.city + "</h2>")
    // },
    // onEachFeature: function(feature, layer) {
    //     console.log(layer);
    //     layer.bindPopup("</h2>Airport Code: " + feature.properties.faa + "</h2");
    // }    

    //   }).addTo(map);
