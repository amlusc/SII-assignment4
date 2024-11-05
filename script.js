// Initialize Leaflet map and center it on Münster
const map = L.map('map').setView([51.9607, 7.6261], 13);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker for Münster
const marker = L.marker([51.9607, 7.6261]).addTo(map);
marker.bindPopup('<b>Münster</b>');

// Load GeoJSON file and add it to the map
fetch('areas.geojson')
    .then(response => response.json())
    .then(data => {
        // Add GeoJSON data and display popups with area names
        L.geoJSON(data, {
            onEachFeature: function (feature, layer) {
                if (feature.properties && feature.properties.name) {
                    layer.bindPopup(feature.properties.name);
                }
            },
            style: {
                color: 'green'
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error loading the GeoJSON file:', error));
