import React from 'react';

import {connect} from 'react-redux'
import {removeSelectedProducts} from '../redux/actions/productAction'
import { useDispatch, useSelector } from "react-redux";


const SlidebarValue = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.product);
  const SidebarList = products.map((product) => {
    const { id, details, name } = product;
    return (
      <div className="column" key={id}>
        
          <div className="ui-cards">
              <div className="card">
                <div className="">
                  <img src={details.image} alt={name} />
                  <h1>{name}</h1>
                
                </div>
                <div className="">
                  <div className="">${details.price}</div>
                  <div className=""> {details.type}</div>
                  <button className=""
                  onClick ={() =>{
                    dispatch(removeSelectedProducts(product))
                  }}
                  >Add to cart</button>
                </div>
              </div>
          </div>
      
      </div>
    );
  });
  return <>{SidebarList}</>;
};



export default SlidebarValue;