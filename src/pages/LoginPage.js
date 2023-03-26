import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";

import "../App.css";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const APIURL = process.env.REACT_APP_API_URL;

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${APIURL}/auth/login`, requestBody)
      .then((response) => {
        console.log(response);
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        const errorDescription = error.response?.data?.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <div className="container login-page">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Card className="p-4">
            <h3 className="text-center mb-4">Login</h3>
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleEmail}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handlePassword}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button className="custom-button w-100" type="submit">
                Log in
              </Button>
            </Form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="w-100 text-center mt-3">
              <p>Don't have an account yet?</p>
              <Link className="signup" to={"/signup"}>
                {" "}
                Sign Up
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
