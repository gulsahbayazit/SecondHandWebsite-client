import Card from "react-bootstrap/Card";
import "../App.css";
import { useLocation } from "react-router-dom";

function ProductCard({ imageUrl, title, price, category }) {
  return (
    <Card className="product-card" style={{ width: "18rem" }}>
      <Card.Img
        className="product-img"
        variant="top"
        src={imageUrl}
        style={{ width: "18rem", height: "18rem" }}
      />
      <Card.Body className="card-info">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-category">{category}</Card.Text>
        <Card.Text className="card-price">{price} coins</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
