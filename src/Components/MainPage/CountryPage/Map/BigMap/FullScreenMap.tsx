import React from "react";
import {
    MapContainer,
    TileLayer,
    GeoJSON,
    Marker,
    Popup,
    Tooltip,
} from 'react-leaflet';
import './FullScreenMap.css';
import geojson from '../../../../../data/BorderCoordinates.json';
import { IMapProps } from "../../../../../Interfaces";

const FullScreenMap = (props: IMapProps): JSX.Element => {
    console.log(props);
    const { center } = props.mapCoords;
    const { capital } = props.mapCoords;
    const { countryName }: any = props;
    const { countryCapital }: any = props;

    const mapData: any = geojson;

    return (
        <>
            <div className="fmap-wrapper">
                <MapContainer className="fmap"
                              center={[center.latitude, center.longitude]}
                              zoom={5}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[capital.latitude, capital.longitude]}>
                        <Popup>{countryCapital}</Popup>
                        <Tooltip>{countryCapital}</Tooltip>
                    </Marker>
                    <GeoJSON data={mapData[countryName]}/>
                </MapContainer>
            </div>
        </>
    );
};

export default FullScreenMap;
