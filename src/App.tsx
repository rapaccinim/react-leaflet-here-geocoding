import './App.css'
import { LeafletMap } from './components/leaflet/leaflet'

function App() {
  return (
    <div className="App">
      <LeafletMap query={" 14 Three Kings Yard, London W1K 4EH"} />
    </div>
  )
}

export default App
