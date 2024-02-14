// * Style import
import './App.css';
// * Modules import
import Accordion from './components/accordion/index';
import ModalPage from './components/custom-modal';
import TabNav from './components/custom-tabs';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color-gen';
import ScrollIndicator from './components/scroll-indicator';
import StartRating from './components/star-rating';
import ThemeSwitcher from './components/theme-switcher';
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
      {/* <QRCodeGenerator /> */}

      {/* //* Theme Switcher Component */}
      {/* <ThemeSwitcher /> */}

      {/* //* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* //* Custom Tab Component */}
      {/* <TabNav /> */}

      {/* //* Custom Modal Component */}
      <ModalPage />
    </div>
  );
}

export default App;
