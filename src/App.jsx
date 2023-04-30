import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Helmet from 'react-helmet';

function App() {
  return (
    
    <main className="app transition-all ease-in">
      <Helmet>
        <title>3D Shirt | ThreeJS </title>
      </Helmet>
      <Home />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App