import { Map, TileLayer, Marker, Popup } from "react-leaflet";

function SearchModalMap() {
  return (
    <Map
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="mapSearch"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup> </Popup>
      </Marker>
    </Map>
  );
}

export default SearchModalMap;
