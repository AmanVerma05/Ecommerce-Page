import './App.css';
import {  Routes,  Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/home';
import 'bootstrap/dist/css/bootstrap.css';
import Products from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </div>
  );
}

export default App;
