'use client'

import L from 'leaflet'
const marker = '/icon.png'

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -0],
  iconSize: [45, 45]
})

export default myIcon
