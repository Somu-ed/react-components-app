// * Style import
import './App.css';
// * Modules import
import Accordion from './components/accordion/index';
import RandomColor from './components/random-color-gen';

function App() {
  return (
    <div className="App">
      {/* //* Accordion Component */}
      <Accordion />

      {/* //* Random Color Generator Component */}
      <RandomColor />
    </div>
  );
}

export default App;
