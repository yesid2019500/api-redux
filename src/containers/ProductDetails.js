import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// useParmas es para obtener el valor de un parametro
import { useParams } from 'react-router-dom'
import { selectedProducts } from './redux/actions/producActions';

const ProductDetails = () => {
  const product = useSelector( state => state.product);
  const  { id, title, category, description, image, price } = product;
  
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId)

  const fetchProductsDetails = async () => {
    try {
      const ID = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const response = await ID.json();
      console.log(response)
      dispatch(selectedProducts(response))

    } catch (error) {
      console.log("Error", error)
    }

  }

  useEffect(()=> {
      if (productId && productId !=='') {
        fetchProductsDetails();
        console.log('hola')
      }
  },[productId])
  
    return (
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}

export default ProductDetails