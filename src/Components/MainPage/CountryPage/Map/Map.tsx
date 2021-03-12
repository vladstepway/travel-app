import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Tooltip } from 'react-leaflet';
import styles from './Map.module.css';

import geojson from '../../../../data/BorderCoordinates.json';


const Map = (props: any): any => {

    const { center }: any = props.mapCoords;
    const { capital }: any = props.mapCoords;
    const { countryName }: any = props;

    const mapData: any = geojson;

    const onFullScrinToggle = (e: React.MouseEvent<HTMLInputElement>) => {
        console.log(e.target);
    };

    return (
        <div>`
            <MapContainer className={styles.map}
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
                <GeoJSON data={mapData[countryName]}/>
            </MapContainer>
            <button type="button">123</button>
        </div>

    );
};

export default Map;
