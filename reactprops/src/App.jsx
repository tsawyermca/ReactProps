import ArrayMap from './components/ArrayMap'
import PropsInfo from './components/Propsinfo'

function App() {

  return (
  <div className="container">
    <PropsInfo name="Tyler" num={8} bool={true}/>
    <ArrayMap />
  </div>
  )
}

export default App
