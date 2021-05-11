import React, { Component } from "react";

class Fetch extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const url =
      "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/";
    let data = url.json;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log(data);
  }

  render() {
    return <div></div>;
  }
}

export default Fetch;
