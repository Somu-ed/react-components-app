// * Style import
import './App.css';
// * Modules import
import Accordion from './components/accordion/index';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color-gen';
import StartRating from './components/star-rating';
import TreeView from './components/tree-view-nav';
import menuData from './components/tree-view-nav/data';

function App() {
  return (
    <div className="App">
      {/* //* Accordion Component */}
      {/* <Accordion /> */}

      {/* //* Random Color Generator Component */}
      {/* <RandomColor /> */}

      {/* //* Star Rating Component */}
      {/* <StartRating noOfStars={10} /> */}

      {/* //* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1} /> */}

      {/* //* Load More Component */}
      {/* <LoadMoreData /> */}

      {/* //* Tree view Nav Component */}
      {/* <TreeView menuData={menuData}/> */}

      {/* //* QR Code Generator Component */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
