import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/smiley'

const LocationMarker = ({lat, lng, onClick}) => {
  return (
    <div className='Location-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='Location-icon' />
    </div>
  )
}

export default LocationMarker
