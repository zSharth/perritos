import Badge from "react-bootstrap/Badge";

const CardBadge = ({ color, text }) => {
  return (
    <h2>
      <Badge bg={color}>{text}</Badge>
    </h2>
  );
};

export default CardBadge;
