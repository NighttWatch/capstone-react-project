import { Routes, Route } from 'react-router-dom';

import Navigation from './compenents/navigation/navigation.compenent';
import Home from './compenents/routes/home/home.compenent';
import Authentication from './compenents/routes/authentication/authentication';
import Shop from './compenents/routes/shop/shop.compenent';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} > 
        <Route index element={<Home/>} />   
        <Route path='shop' element={<Shop/>} /> 
        <Route path='auth' element={<Authentication/>} />
      </Route>
      
    </Routes>
  )
}

export default App;
