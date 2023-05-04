'use client'

import 'leaflet/dist/leaflet.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from './MarkerClusterGroup'
import Icon from './Icon'

// * ts types
import { LatLngTuple } from 'leaflet'

const positions: LatLngTuple[] = [
  [51.505, -0.09],
  [51.51, -0.05],
  [51.51, -0.1],
  [51.51, -0.12],
  [51.505, -0.09],
  [51.505, -0.08],
  [51.505, -0.07],
  [51.505, -0.06],
  [51.505, -0.05]
]

const position: LatLngTuple = [51.505, -0.09]

const Map = () => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '500px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {positions.map((position, index) => (
            <Marker key={index} position={position} icon={Icon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  )
}

export default Map
