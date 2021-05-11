import React, { Component } from "react";
import "./Wireframe.css";

function Wireframe (props) {

    console.log(props.drinkList)
    return (
      <div className = "drinks-list">
        
          
          
        
          {props.drinkList && props.drinkList.slice(0, 9).map((drink, index) =>(

            <div onClick={()=> props.getDrink(drink)} className={`_${index+1} drink`}>
              
              <img src = {drink.strDrinkThumb} />
              
            </div>
          ))}

      </div>
    );
  }

export default Wireframe;
