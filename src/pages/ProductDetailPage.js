import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Email from "../components/Email";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const APIURL = process.env.REACT_APP_API_URL;
  const getProduct = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${APIURL}/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProduct = response.data;
        setProduct(oneProduct);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container>
      <Row className="d-flex align-items-center">
        {product && (
          <>
            <Col md={6} className="mx-auto">
              <img src={product.imageUrl} style={{ width: "100%" }} />
            </Col>
            <Col md={6} className="mx-auto">
              <h3 className="product-head">{product.title}</h3>
              <h6 className="product-category">Condition</h6>
              <h6 className="product-text"> {product.condition}</h6>
              <h6 className="product-category">Description: </h6>
              <h6 className="product-text"> {product.description}</h6>
              <div className="row">
                <div className="col">
                  <h6 className="product-category">Points: </h6>
                  <h6 className="product-text">{product.price} coins</h6>
                </div>{" "}
                <div className="col">
                  <h6 className="product-category">Address:</h6>
                  <h6 className="product-text">
                    {product.postcode} {product.address}
                  </h6>{" "}
                </div>
              </div>
              <hr className="hr" />

              <div className="row">
                <div className="col">
                  <h6 className="product-category-u">seller:</h6>
                  <h6 className="product-text-u">{product.userName} </h6>
                </div>
                <div className="col">
                  <h6 className="product-category-u">contact:</h6>
                  <h6 className="product-text-u">
                    {product.user?.contactInfo}{" "}
                  </h6>
                </div>
                <div className="col">
                  <h6 className="product-category-u">email:</h6>
                  <h6 className="product-text-u">{product.user?.email} </h6>
                </div>
                <Email email={product.user?.email} />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default ProductDetailPage;
