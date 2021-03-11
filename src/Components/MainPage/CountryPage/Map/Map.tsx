import React from "react";
import { MapContainer , TileLayer, Marker, Popup } from 'react-leaflet';
import styles from './Map.module.css';

 const Map = (props: any):any => {

    const { mapCoords } : any = props;

    return (
            <MapContainer className={styles.map}
                          center = {[mapCoords.latitude, mapCoords.longitude]}
                          zoom={3} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
    );

};

export default Map;
