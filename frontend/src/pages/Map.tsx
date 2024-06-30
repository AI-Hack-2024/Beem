import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
    return (
        <MapContainer
            className="full-height-map"
            center={[38, 139.69222]}
            zoom={6}
            minZoom={3}
            maxZoom={19}
            maxBounds={[[-85.06, -180], [85.06, 180]]}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
            TODO: Add markers
        </MapContainer>
    )
}

export default Map