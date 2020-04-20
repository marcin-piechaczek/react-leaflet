import { LatLngTuple } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet'

const center: LatLngTuple = [40, -90]

export default function WMSTileLayerExample() {
  return (
    <MapContainer center={center} zoom={4}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <WMSTileLayer
        attribution="Weather data © 2012 IEM Nexrad"
        layers="nexrad-n0r-900913"
        format="image/png"
        transparent
        url="http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi"
      />
    </MapContainer>
  )
}