import React, { useRef, useState } from "react";
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Marker,
    Popup,
    Tooltip,
} from 'react-leaflet';
import './Map.css';
import geojson from '../../../../data/BorderCoordinates.json';

interface ICenter {
    latitude: number
    longitude: number
}

interface ICapital {
    latitude: number
    longitude: number
}

interface IMapProps {
    countryName: string
    mapCoords: {
        center: ICenter,
        capital: ICapital

    }
}


const Map = (props: IMapProps): JSX.Element => {
    const { center } = props.mapCoords;
    const { capital } = props.mapCoords;
    const { countryName }: any = props;

    const style = "map";

    const [mapClass, setMapClass] = useState(style);

    const mapData: any = geojson;

    function handleClick() {
        if (mapClass.includes("fullscreen")) {
            setMapClass(style);
        } else {
            setMapClass( "fullscreen");
        }

    }

    return (
        <div >
            <MapContainer className={mapClass}
                          center={[center.latitude, center.longitude]}
                          zoom={3}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[capital.latitude, capital.longitude]}>
                    <Popup>Popup for Marker</Popup>
                    <Tooltip>Tooltip for Marker</Tooltip>
                </Marker>
                {/* <GeoJSON data={mapData[countryName]}/> */}
            </MapContainer>
            <button type="button" onClick={() => handleClick()}>full</button>
        </div>

    );
};

export default Map;
