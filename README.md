# Interactive Map with Leaflet

This project involves creating an interactive HTML page with a map using the Leaflet JavaScript framework. You’ll add functionality like markers and polygons to enhance the map's interactivity.

## Assignment Overview

In this exercise, we created a small HTML page featuring an interactive map, using the Leaflet framework to display the map, allowing users to pan and zoom. The background uses OpenStreetMap data. It includes:

- **Marker for Münster:** Displays the city of Münster with a marker.
- **Pop-up on Marker Click:** A pop-up shows the city name when the marker is clicked.
- **Protected Sites Polygons:** Polygons representing protected sites (“Naturschutzgebiete”) near Münster.
- **Pop-up on Polygon Click:** Shows the site name in a pop-up when clicking on a protected site.

## Data Source

Boundaries of the protected sites are from [Overpass Turbo](https://overpass-turbo.eu/).
To search in Wizard:
```bash
boundary=protected_area in Münster
```

## Getting Started

1. **Install http-server**  
   Open the terminal and install http-server (if not already installed):
   ```bash
   npm install -g http-server
2. **Start the Server**  
   Navigate to the directory with your files and start the server:
   ```bash
   http-server -p 8000
3. **Open the Map**     
   In your browser, navigate to:
   ```bash
   http://localhost:8000/index.html

