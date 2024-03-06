import "./../styles/Card.css";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt={props.title} />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-price">{props.price}</h3>
        <p className="card-description">{props.description}</p>
        <div className="card-button">
          <Button>
            Order a delivery <FontAwesomeIcon icon={faTruck} />
          </Button>
        </div>
      </div>
    </div>
  );
}
