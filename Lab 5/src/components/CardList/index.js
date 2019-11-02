import React from "react";
import Card from "../Card/card.js"

class Weather extends React.Component {

  constructor(props) {
    super(props);

    // Set up the initial, default data
    this.state = {
      name: "",
      temperature: 0,
      temperatureUnit: "",
      details: ""
    };


  }

  componentDidMount() {

    // Use window.fetch to retrieve data
    // THEN convert the JSON into a JavaScript object
    // THEN work on the result

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
    .then(res => res.json())
    .then((result) => {
      // Save the "periods" returned by the data
      let periods = result.properties.periods;

      // Update the data using the first (0) data
      // Retrieve the "temperature",
      //  "temperatureUnit", and "detailedForecast"
      //  properties of the object.

      this.setState({

        name: periods[0].name,
        temperature: periods[0].temperature,
        temperatureUnit: periods[0].temperatureUnit,
        details: periods[0].detailedForecast

      });



    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <div>
      <Card
        name={this.state.name}
        temperature={this.state.temperature}
        temperatureUnit={this.state.temperatureUnit}
        details={this.state.details}
      />
      </div>
    );
  }

}



export default Weather;
