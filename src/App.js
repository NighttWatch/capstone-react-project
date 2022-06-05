import { Routes, Route } from 'react-router-dom';

import Navigation from './compenents/navigation/navigation.compenent';
import Home from './compenents/routes/home/home.compenent';
import SignIn from './compenents/routes/sign-in/sign-in.compenent';



const Shop = () => {
  return (
    <h1> I am the shop page </h1>
  )
};


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>} > 
        <Route index element={<Home/>} />   
        <Route path='shop' element={<Shop/>} /> 
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
      
    </Routes>
  )
}

export default App;
