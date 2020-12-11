import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDdio_MpFobIwUZ075ygykWCj4PlnDwEsI'

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null)
  const handleCloseBox = () => {
    setLocationInfo(null)
  }
  const markers = eventData.map((ev, idx) => {
    if(ev.categories[0].id === 8){
      return <LocationMarker key={idx} 
      lat={ev.geometries[0].coordinates[1]} 
      lng={ev.geometries[0].coordinates[0]} 
      onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>
    }
    return null
  })
  return (
    <div className='Map'>
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAPS_API_KEY}}
        defaultCenter={center}
        defaultZoom={zoom}>
          {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} closeInfoBox={handleCloseBox} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map
