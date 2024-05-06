import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Captcha from './Components/Captcha';
import Home from './Components/Home';
import Secure from './Components/Secure';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Secure />} />
          <Route path='/captcha' element={<Captcha />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
