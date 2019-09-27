import "./index.css";

class Card {
 constructor(props) {
   this.props = props;
 }
  render() {
    `<h1 class="title">${this.props.title}</h1>`;
  }
}
export default Card;
