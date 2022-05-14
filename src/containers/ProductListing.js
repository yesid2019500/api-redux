import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductConponent from './ProductConponent';
import { setProducts } from './redux/actions/producActions';



const ProductListing = () => {
    
const dispatch = useDispatch();
const state = useSelector( state => state );
console.log(state)

const fetchProducts = async () => {
   try {
    const api = await fetch('https://fakestoreapi.com/products');
    const response = await api.json();
    console.log(response)
    // le pasamos el resultado de la api al dispatch
    dispatch(setProducts(response))

   } catch (error) {
       console.log(error)
   }
}


useEffect(()=> {
    fetchProducts();
},[]);

  return (
    <div className="ui grid container abajo">
        <ProductConponent/>
    </div>
  )
}

export default ProductListing