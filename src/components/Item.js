import React from "react";
import { Link, useParams } from "react-router-dom";
import FetchNutrition from "./FetchNutrition";
//import AccordionBody from "react-bootstrap/esm/AccordionBody";
//import Accordion from "react-bootstrap/Accordion";
import Review from "./Review";
import { items } from "../data/data";
import { findDOMNode } from "react-dom";
import { I } from "chart.js/dist/chunks/helpers.core";

const Item = ({ items }) => {
  const { itemId } = useParams();
  const currentItem = items.filter((item) => {
    return item.name === itemId;
  });
  const { name, description, price } = currentItem[0];
  return (
    <>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">£{parseFloat(price).toFixed(2)}</p> 
          <div className="col-6"> <FetchNutrition query={itemId} /></div>
          <br></br>
          <div className="col-6"><Review food={items}/></div>
          <p>{items.Review}</p>
          
          
        </div>
      </div>
      
    </>
  );
};

export default Item;