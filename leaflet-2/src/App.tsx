import './App.css';
import { LayerContextProvider } from './components/context/LayerContext';
import LeafletMap from './components/LeafletMap';
// import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <LayerContextProvider>
      <LeafletMap />
    </LayerContextProvider>
  )
}

export default App;
