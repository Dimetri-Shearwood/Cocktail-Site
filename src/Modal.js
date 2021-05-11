import React, { Component } from 'react'
import './Modal.css'

function Modal(props) {
    
    if(props.display){
        console.log(props.data)
        return (
        <div className="modal">
            <div className="card">
            <div className="header">
                <h1 className="cardName">{props.data.strDrink} 
                    
                </h1>
                <button className="xbutton" onClick={props.hide}>X</button>
            </div>
            
            <div className="modalflex">
                <img className="modalimage" src= {props.data.strDrinkThumb}/>
                    <div className="drinkdesc">
                        {props.data.strInstructions}
                        <h3>{props.data.strCategory}</h3>
                        <h3>{props.data.strAlcoholic}</h3>
                    </div>
                </div>
            </div>

        </div>
        )
    }
    else {
        return (
        <div>

        </div>
        )
    }
}

export default Modal