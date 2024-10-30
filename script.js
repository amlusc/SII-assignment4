// Leaflet-Karte initialisieren und auf Münster zentrieren
const map = L.map('map').setView([51.9607, 7.6261], 13);

// OpenStreetMap-Kachel-Layer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Marker für Münster hinzufügen
const marker = L.marker([51.9607, 7.6261]).addTo(map);
marker.bindPopup('<b>Münster</b>');

// GeoJSON-Datei laden und zur Karte hinzufügen
fetch('areas.geojson')
    .then(response => response.json())
    .then(data => {
        // GeoJSON-Daten hinzufügen und Popups für die Namen der Gebiete anzeigen
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
    .catch(error => console.error('Fehler beim Laden der GeoJSON-Datei:', error));
