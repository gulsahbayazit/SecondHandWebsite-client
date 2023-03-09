import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Category from "../components/Category";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import addproduct from "../images/addproduct.jpg";
const APIURL = process.env.REACT_APP_API_URL;

function AddProductPage(props) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  console.log(user);

  const navigate = useNavigate();

  const handleTitle = (e) => setTitle(e.target.value);
  const handleCondition = (e) => setCondition(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePostcode = (e) => setPostcode(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
    const token = localStorage.getItem("authToken");

    axios
      .post(`${APIURL}/upload`, uploadData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        console.log(response.data.imageUrl);
        setImageUrl(response.data.imageUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleAddProductSubmit = (e) => {
    console.log("submit");
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    // Create an object representing the request body
    const requestBody = {
      title,
      category,
      condition,
      price,
      description,
      imageUrl,
      postcode,
      address,
      userId: user._id,
      userName: user.userName,
    };
    console.log(requestBody);
    axios
      .post(`${APIURL}/add-product`, requestBody, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        navigate("/profile");
      })
      .catch((err) => {
        const errorDescription = err.response?.data?.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <>
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col md={8} className="pb-5">
            <img src={addproduct} style={{ width: "100%" }} />
            <h5 className="addproduct-head text-center pt-3">
              Add your furniture to sell!
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col md={8}>
            <form onSubmit={handleAddProductSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Title:</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleTitle}
                />
              </Form.Group>
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>Condition:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="condition"
                      value={condition}
                      onChange={handleCondition}
                    />
                  </Form.Group>
                </div>{" "}
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>Points:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      name="price"
                      value={price}
                      onChange={handlePrice}
                    />
                  </Form.Group>
                </div>
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  className="form-control"
                  as="textarea"
                  rows={4}
                  style={{ height: "100px", padding: "10px" }}
                  type="description"
                  name="description"
                  value={description}
                  onChange={handleDescription}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Upload Image:</Form.Label>
                <Form.Control
                  className="form-control"
                  type="file"
                  onChange={(e) => handleFileUpload(e)}
                />
              </Form.Group>
              <div className="row">
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>Postcode:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="postcode"
                      name="postcode"
                      value={postcode}
                      onChange={handlePostcode}
                    />
                  </Form.Group>
                </div>{" "}
                <div className="col">
                  <Form.Group className="mb-3">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="address"
                      name="address"
                      value={address}
                      onChange={handleAddress}
                    />
                  </Form.Group>
                </div>{" "}
              </div>

              <Form.Group className="mb-3">
                <Category />
              </Form.Group>
              <div className="col d-grid gap-2">
                <button className="btn btn-danger W-100" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddProductPage;
