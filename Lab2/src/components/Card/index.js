import "./index.css";

class Card1 {
 constructor(props) {
   this.props = props;
 }
  render() {
    `<h1 class="card">${this.props.card}</h1>`;
  }
}
export default Card1;
