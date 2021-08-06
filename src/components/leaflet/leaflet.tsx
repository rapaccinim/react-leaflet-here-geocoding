/**
 * This is the dedicated component for the Leaflet Map that we use in HeadOffice.
 * For the geocoding feature, we are using HERE API: (https://www.here.com/)
 */

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { Coordinates, initialState } from '../shared/typesAndInterfaces'
import { getCoordinatesFromHereApi } from '../geocoder/geocoder'

export function LeafletMap({ query }: { query: string }) {

    let [coordinates, setCoordinates] = useState(initialState);

    useEffect(() => {
        // call HERE geocoding API only if we have an address to pass
        if (query !== "No_Address") getCoordinatesFromHereApi(query).then((coordinatesFromApi: Coordinates) => setCoordinates(coordinatesFromApi))
    }, [query])

    return (
        // display the map only if you have valid coordinates (in a range between -90/90 for lat. and -180/180 for long.)
        coordinates.latitude < 91 && coordinates.longitude < 181
            ?   // here we use the React Leaflet components
            <MapContainer center={[coordinates.latitude, coordinates.longitude]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", maxWidth: "800px" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coordinates.latitude, coordinates.longitude]}>
                    <Popup>This is a popup that we can customize</Popup>
                </Marker>
            </MapContainer>
            : null
    )

}