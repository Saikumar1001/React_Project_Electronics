import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Footer from './components/footer';
import Products from "./components/data1";
import Data2 from "./components/data2";
import Data3 from "./components/data3";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Data2 />
      <Data3 />
      <Footer />
    </div>
  );
}

export default App;
