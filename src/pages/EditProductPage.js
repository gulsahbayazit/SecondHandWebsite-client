import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import editproduct from "../images/editproduct.jpg";

function EditProductPage(props) {
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const APIURL = process.env.REACT_APP_API_URL;
  const storedToken = localStorage.getItem("authToken");

  const navigate = useNavigate();
  const { id } = useParams();

  const getProduct = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${APIURL}/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProduct = response.data;
        setTitle(oneProduct.title);
        setCondition(oneProduct.condition);
        setDescription(oneProduct.description);
        setPostcode(oneProduct.postcode);
        setAddress(oneProduct.address);
        setPrice(oneProduct.price);
        setImageUrl(oneProduct.imageUrl);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      condition,
      description,
      postcode,
      address,
      price,
      imageUrl,
    };

    axios
      .put(`${APIURL}/products/${id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .updateProduct(id, requestBody)
      .then((response) => {
        navigate(`/products/${id}`);
      });
  };

  const deleteProduct = () => {
    axios
      .delete(`${APIURL}/products/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .deleteProduct(id)
      .then(() => navigate("/products"))
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="pb-5">
          <img src={editproduct} style={{ width: "100%" }} />
          <h5 className="addproduct-head text-center pt-3">
            Edit your furniture!
          </h5>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={8}>
          <form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Condtion:</Form.Label>
                  <Form.Control
                    name="condition"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  />
                </Form.Group>
              </div>{" "}
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Points:</Form.Label>
                  <Form.Control
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Group>{" "}
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                style={{ height: "100px", padding: "10px" }}
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <div className="row">
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control
                    name="postcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </Form.Group>
              </div>{" "}
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
              </div>{" "}
            </div>
            <div className="col d-grid gap-2">
              <div className="d-flex justify-content-center ">
                <Link to="/profile">
                  <button
                    className="btn btn-danger custom-button mx-3"
                    type="submit"
                    // onClick={updateProduct}
                  >
                    Update Product
                  </button>
                </Link>
                <Link to="/profile">
                  <button
                    style={{ backgroundColor: "#fe7e6d" }}
                    className="btn btn-danger mx-3 custom-button-lila"
                    onClick={deleteProduct}
                  >
                    Delete Product
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProductPage;
