// * Style import
import './App.css';
// * Modules import
import Accordion from './components/accordion/index';
import RandomColor from './components/random-color-gen';
import StartRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* //* Accordion Component */}
      {/* <Accordion /> */}

      {/* //* Random Color Generator Component */}
      {/* <RandomColor /> */}

      {/* //* Star Rating Component */}
      <StartRating noOfStars={10} />
    </div>
  );
}

export default App;
