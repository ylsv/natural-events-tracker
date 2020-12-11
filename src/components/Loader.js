import boobs from './boobs-loader.jpg'

function Loader() {
  return (
    <div className='Loader'>
      <img src={boobs} alt="loading"/>
      <h1>fetching data</h1>
    </div>
  )
}

export default Loader
