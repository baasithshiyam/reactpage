import React from 'react';

import {connect} from 'react-redux'
import {selectedProducts} from '../redux/actions/productAction'
import { useDispatch, useSelector } from "react-redux";


const MainPageCards = (onCreatePressed) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, details, name } = product;
    return (
      <div className="column" key={id}>
        
          <div className="ui-cards">
              <div className="card">
                <div className="image">
                  <img src={details.image} alt={name} />
                  <h1>{name}</h1>
                
                </div>
                <div className="content">
                  <div className="header">${details.price}</div>
                  <div className="meta price"> {details.type}</div>
                  <button className="meta"
                  onClick ={() =>{
                    dispatch(selectedProducts(product))
                  }}
                  >Add to cart</button>
                </div>
              </div>
          </div>
      
      </div>
    );
  });
  return <>{renderList}</>;
};



export default MainPageCards;