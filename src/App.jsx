// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Add from './pages/Add';
import { useState } from 'react';
import Modify from './pages/Modify';


function App() {
  const [modifyOnClick, setModifyOnClick] = useState(false);


  console.log(modifyOnClick);

  return (
    <div>
      <Header modifyOnClick={modifyOnClick} setModifyOnClick={setModifyOnClick} />
      <Routes>
        <Route index element={<Home modifyOnClick={modifyOnClick} setModifyOnClick={setModifyOnClick} />} />
        <Route path='/Add' element={<Add modifyOnClick={modifyOnClick} setModifyOnClick={setModifyOnClick} />} />
        <Route path='/modify' element={<Modify modifyOnClick={modifyOnClick} setModifyOnClick={setModifyOnClick} />} />

      </Routes>
    </div>
  );
}

export default App;
