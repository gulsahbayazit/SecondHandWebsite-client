import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signup from "../images/signup.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignupPage(props) {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [region, setRegion] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const APIURL = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

  const handleUserName = (e) => setUserName(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleRegion = (e) => setRegion(e.target.value);
  const handleContactInfo = (e) => setContactInfo(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      userName,
      firstName,
      lastName,
      region,
      contactInfo,
      email,
      password,
    };

    axios
      .post(`${APIURL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/signup-info");
      })
      .catch((err) => {
        const errorDescription = err.response?.data?.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col justify-content-center">
          <img
            className="container-fluid create-img"
            src={signup}
            alt="Header Image"
          />
        </div>

        <div className="col justify-content-center">
          <h2 className="text-center">Sign up</h2>

          <form onSubmit={handleSignupSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>User Name:</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={userName}
                onChange={handleUserName}
              />
            </Form.Group>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstName}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastName}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Region:</Form.Label>
                  <Form.Control
                    type="text"
                    name="region"
                    value={region}
                    onChange={handleRegion}
                  />
                </Form.Group>
              </div>
              <div className="col">
                <Form.Group className="mb-3">
                  <Form.Label>Contact Info:</Form.Label>
                  <Form.Control
                    type="text"
                    name="contactInfo"
                    value={contactInfo}
                    onChange={handleContactInfo}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </Form.Group>

            <div className="col d-grid gap-2">
              <Button className="custom-button w-100" type="submit">
                Sign up
              </Button>
            </div>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="text-center">
            <p> Already have account?</p>
            <Link to={"/login"} className="signup">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
