import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {

    return(<div className="card">
    <header>{this.props.name}</header>
    {this.props.temperature}
        {this.props.temperatureUnit}
        <p>
          {this.props.details}
        </p>

    </div>
    );

  }
}
export default Card;
