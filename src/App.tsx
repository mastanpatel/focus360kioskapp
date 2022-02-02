import './App.css';
import ImagePreview from './components/ImagePreview';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { propertyList } from './data/PropertyList';
import Focus360Provider from './context/context';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className='home-body'>
          <Focus360Provider>
            <SideBar properties={propertyList}></SideBar>
            <ImagePreview properties={propertyList}></ImagePreview>
          </Focus360Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
