import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Wireframe from "./Wireframe";
import Refresh from "./Refresh";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {drinks:[], display: false, modal:{}};
  }

  componentDidMount() {
    const url =
      "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => 
      {
        console.log(data.drinks);
        this.setState({ drinks: data.drinks })
      });
    
  }

    handleModal = (drink) => {
        this.setState({modal: drink, display: true}) 
      
    }

    hideModal = () => {
      this.setState({display: false})
    }
  render() {

console.log(this.state)

    return (
      <div>
        <Modal display= {this.state.display} data= {this.state.modal} hide= {this.hideModal}/>
        <Navbar />
        {/* test here */}
        <Wireframe getDrink= {this.handleModal} drinkList={this.state.drinks}/>
        <div className= "refreshbutton">
          <Refresh />
        </div>
      
      </div>
    );
  }
}

export default App;
