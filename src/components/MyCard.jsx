import Card from "react-bootstrap/Card";
import CardBadge from "./Tags";

const MyCard = ({ url, name, description, text, color }) => {
  return (
    <>
      <Card style={{ width: "20rem", height:"30rem" }}>
        <Card.Img className="card__img" variant="top" src={url} />
        <Card.Body className="card__body">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <CardBadge color={color} text={text}></CardBadge>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;
