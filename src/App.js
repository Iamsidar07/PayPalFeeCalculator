import Header from './components/Header';
import PayPalFeeCalculator from './components/PayPalFeeCalculator';
import StripeFeeCalculator from './components/StripeFeeCalculator';
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
          <Route path={"/paypalfeecalculator"} element={<PayPalFeeCalculator/>}/>
          <Route path={"/stripefeecalculator"} element={<StripeFeeCalculator/>}/>
          <Route path={"/privacyandpolicy"} element={<Privacy/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/"} element={<PayPalFeeCalculator/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      {/* header  */}
    
      {/* feeCalculator  */}
      {/* <PayPalFeeCalculator /> */}
  
      {/* footer  */}
    </div>
  );
}

export default App;
