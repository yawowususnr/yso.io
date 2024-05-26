import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl"; // import the mapbox library
import "mapbox-gl/dist/mapbox-gl.css"; // import the mapbox styles

mapboxgl.accessToken =
    "pk.eyJ1IjoieWF3c25yMzMiLCJhIjoiY2x3bHZ2MXRiMWltNDJtdGc3NjVxaDA5dSJ9.vKCVvzfHlMXVF_8-syzVsg";

export default function Map({ lng, lat, zoom = 2.5, pitch = 25 }) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    let mapTheme = "night";

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            center: [lng, lat],
            zoom: zoom,
            pitch: pitch,
        });

        // set config properties
        map.current.on("style.load", () => {
            map.current.setConfigProperty("basemap", "lightPreset", mapTheme);
            map.current.setPadding({ left: 150 });

            const el = document.createElement("span");
            el.className = "map-marker";

            new mapboxgl.Marker({ element: el })
                .setLngLat([lng, lat])
                .addTo(map.current);
        });
    });

    return (
            <div ref={mapContainer} className="map-container h-full w-full" />
    );
}
