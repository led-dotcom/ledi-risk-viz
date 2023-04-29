'use client'

import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Icon from './Icon'

// * ts types
import { LatLngTuple } from 'leaflet'

const positions: LatLngTuple[] = [
  [51.505, -0.09],
  [51.51, -0.05],
  [51.51, -0.1],
  [51.51, -0.12],
  [51.505, -0.09]
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
        {positions.map((position, index) => (
          <Marker key={index} position={position} icon={Icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default Map
