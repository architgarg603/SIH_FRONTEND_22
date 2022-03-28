import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import x from '../assets/images/pointer.png'
export default function Maps() {
    // style="mapbox://styles/mapbox/streets-v9"
    const accessToken = 'pk.eyJ1IjoiYXJjaGl0Z2FyZzYwMyIsImEiOiJjbDFhZ2FpZmsxeGh0M2lzZ3E0NWo3dzMzIn0.XL0f8GwMjWKIqVNaOz1A4A'
    console.log(accessToken)
    const [lng, setLng] = useState(77.216721);
    const [lat, setLat] = useState(28.7041);
    console.log(setLat, setLng)
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lng,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });
    const [selectedPark, setSelectedPark] = useState(null);


    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoiYXJjaGl0Z2FyZzYwMyIsImEiOiJjbDFhZ2FpZmsxeGh0M2lzZ3E0NWo3dzMzIn0.XL0f8GwMjWKIqVNaOz1A4A"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <Marker
                    key={'1'}
                    latitude={lat}
                    longitude={lng}
                >
                    <button
                        className="marker-btn"
                        onClick={e => {
                            e.preventDefault();
                            setSelectedPark("park");
                        }}
                    >
                        <img src='/logo192.png' alt="Skate Park Icon" />
                    </button>
                </Marker>

                {selectedPark ? (
                    <Popup
                        latitude={selectedPark.geometry.coordinates[1]}
                        longitude={selectedPark.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedPark(null);
                        }}
                    >
                        <div>
                            <h2>{selectedPark.properties.NAME}</h2>
                            <p>{selectedPark.properties.DESCRIPTIO}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}