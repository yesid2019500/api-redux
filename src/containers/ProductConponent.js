import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductConponent = () => {

    const products  = useSelector(state => state.allProducts.products );
    // en la posion 0 del array
    // const { id, title } = products[0]
  
    const renderList = products.map( (product) =>{
    // const { id, title, image, price, category } = products;
    return (
     <div className="four wide column" key={product.id}>
        {/* Link aqui me trae el id de la imagen donde se da click */}
         <Link to={`/product/${product.id}`} >
        <div className="ui link cards">
            <div className="card">
                <div className="image">
                    <img src={product.image} alt="" />
                </div>
                <div className="content">
                    <div className="header">{product.title}</div>
                    <div className="meta price">$ {product.price}</div>
                    <div className="meta">{product.category}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>
        )
    })
  
  return (
    <>{ renderList}</>
  )
}

export default ProductConponent