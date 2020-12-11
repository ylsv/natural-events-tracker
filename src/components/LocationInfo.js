import {Icon} from '@iconify/react'
import closeIcon from '@iconify/icons-mdi/close'

function LocationInfo({info, closeInfoBox}) {
  return (
    <div className='LocationInfo'>
      <Icon icon={closeIcon} className='CloseIcon' onClick={closeInfoBox} />
      <h2>Volcano Location Info</h2>
      <ul>
        <li>ID: <strong>{info.id}</strong></li>
        <li>TITLE: <strong>{info.title}</strong></li>
      </ul>
    </div>
  )
}

export default LocationInfo
