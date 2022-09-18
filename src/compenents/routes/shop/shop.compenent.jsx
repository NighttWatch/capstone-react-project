import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux/es/exports";

import CategoriesPreview from '../categories-preview/categories-preview.compenent';
import Category from '../category/category.compenent';

import { fetchCategoriesStartAsync } from '../../../store/categories/category.action';

import './shop.styles.scss';

const Shop = () => {  
  const dispatch = useDispatch(); // it is never change

  //category
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);


  return (
    <Routes>
      <Route index element={ <CategoriesPreview /> } />
      <Route path=":category" element={ <Category/> }/>
    </Routes>
  );
};
  
export default Shop;