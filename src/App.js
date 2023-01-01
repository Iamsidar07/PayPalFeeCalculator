import Header from './components/Header';
import BmiCalculator from './components/BmiCalculator';

import Footer from './components/Footer';
import Privacy from './Privacy';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={"/bmicalculator"} element={< BmiCalculator />}/>
          <Route path={"/privacyandpolicy"} element={<Privacy/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/"} element={< BmiCalculator/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* header  */}
    
      {/* feeCalculator  */}
      {/* <BmiCalculator /> */}
  
      {/* footer  */}
    </div>
  );
}

export default App;
