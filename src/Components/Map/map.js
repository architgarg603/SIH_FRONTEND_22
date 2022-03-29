import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
export default function Maps({ data }) {
    const [lng, setLng] = useState(77.216721);
    const [lat, setLat] = useState(28.7041);
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lng,
        width: "48vw",
        height: "calc(100vh - 150px)",
        zoom: 10
    });

    const [selectedPark, setSelectedPark] = useState(null);
    useEffect(() => {
        navigator?.geolocation?.getCurrentPosition(function (position) {
            setViewport({ ...viewport, latitude: position.coords.latitude, longitude: position.coords.longitude })
            setLng(position.coords.longitude)
            setLat(position.coords.latitude)
        });
    }, [])
    useEffect(()=>{
        console.log(selectedPark)
    },[selectedPark])

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

                {data?.map((info, idx) => {
                    return (
                        <Marker
                            key={idx}
                            latitude={info.longitude}
                            longitude={info.latitude}
                        >
                            <button
                                className="marker-btn"
                                onClick={e => {
                                    e.preventDefault();
                                    setSelectedPark(info);
                                }}
                            >
                                <img src='/pointer.png' alt="Skate Park Icon" style={{ height: '25px', width: '25px' }} />
                            </button>
                        </Marker>
                    )
                })} 

                {selectedPark ? (
                    <Popup
                        latitude={selectedPark.longitude}
                        longitude={selectedPark.latitude}
                        onClose={() => {
                            setSelectedPark(null);
                        }}
                    >
                        <div>
                            <h2>{selectedPark?.lab_name}</h2>
                            <p>{selectedPark.lab_address}</p>
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}