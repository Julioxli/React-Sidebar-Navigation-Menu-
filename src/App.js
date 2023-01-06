//Contents
import Navbar from './components/Navbar';

//Symbols
import {RxHamburgerMenu} from 'react-icons/rx'

import { useState } from 'react';

import './App.css';

function App() {
  const [mostrarNav, setmostrarNav] = useState(false)

  return (
    <div className="App">
     <header>
      <RxHamburgerMenu onClick={() => setmostrarNav(!mostrarNav)}/>
     </header>
     {/* {mostrarNav && <Navbar />} */}
     <Navbar mostrar={mostrarNav}/>
    </div>
  );
}

export default App;
