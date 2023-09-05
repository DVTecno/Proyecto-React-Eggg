
import {Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import Productos from './public/components/Productos';
import { Footer } from './public/components/Footer';

function App() {


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Productos />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App
