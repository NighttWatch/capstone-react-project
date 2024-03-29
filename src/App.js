import { useEffect} from "react";
import { useDispatch } from "react-redux/es/exports";
import { Routes, Route } from 'react-router-dom';

import Navigation from './compenents/navigation/navigation.compenent';
import Home from './compenents/routes/home/home.compenent';
import Authentication from './compenents/routes/authentication/authentication';
import Shop from './compenents/routes/shop/shop.compenent';
import Checkout from './compenents/routes/checkout/chechout';

import { checkUserSession } from "./store/user/user.action";




const App = () => {
  const dispatch = useDispatch(); // it is never change


  //user
  useEffect(() => {
    dispatch(checkUserSession());
  },[]);


  return (
    <Routes>
      <Route path='/' element={<Navigation/>} > 
        <Route index element={<Home/>} />   
        <Route path='shop/*' element={<Shop/>} /> 
        <Route path='checkout' element={<Checkout/>} />
        <Route path='auth' element={<Authentication/>} />
      </Route>
      
    </Routes>
  )
}

export default App;
