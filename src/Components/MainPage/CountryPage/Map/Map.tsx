import React from "react";
import { MapContainer, TileLayer, GeoJSON, Polygon } from 'react-leaflet';
import styles from './Map.module.css';
import 'react-leaflet-fullscreen/dist/styles.css';
import geojson from '../../../../data/BorderCoordinates.json';


const Map = (props: any): any => {

    const { mapCoords }: any = props;
    const { countryName }: any = props;

    const mapData: any = geojson;

    return (
        <div>
            <MapContainer className={styles.map}
                          center={[mapCoords.latitude, mapCoords.longitude]}
                          zoom={3}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={mapData[countryName]}/>
            </MapContainer>
        </div>

    );
};

export default Map;
