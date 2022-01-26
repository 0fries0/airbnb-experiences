import "../components/Card.css";
import starpic from "../images/star.png";

function Card(props) {
  return (
    <div className="card">
      {props.card.openSpots === 0 && <div className = "card--badge">SOLD OUT</div>}
      <img className="card--img" src={require(`../images/${props.card.coverImg}`)} />
      <div className="card--stats">
        <img src={starpic} className="card--star" />
        <span>{props.card.stats.rating}</span>
        <span className="gray">({props.card.stats.reviewCount}) • </span>
        <span className="gray">{props.card.location}</span>
      </div>
      <p>{props.card.title}</p>
      <p>
        <span className="bold">From ${props.card.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
