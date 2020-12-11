import {Icon} from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/smiley'

function Header() {
  return (
    <header className='Header'>
      <h1><Icon icon={locationIcon}/> Wildfire Tracker</h1>
    </header>
  )
}

export default Header
