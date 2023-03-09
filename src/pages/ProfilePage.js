import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import DisplayFormButton from "../components/DisplayFormButton";
import { AuthContext } from "../context/auth.context";

function ProfilePage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const APIURL = process.env.REACT_APP_API_URL;
  const { user, authenticateUser } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState([]);

  useEffect(() => {
    fetchData();
    fetchUpdatedUser();
  }, [user]);

  const fetchData = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${APIURL}/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      console.log(response);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUpdatedUser = async () => {
    const storedToken = localStorage.getItem("authToken");
    try {
      const response = await axios.get(`${APIURL}/profile`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });
      setUpdatedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="row">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h4 className="text-center profile-user">Hi {user?.userName}!</h4>
        <h6 className="text-center profile-welcome">
          Welcome to your account! <br />
          Here you can edit your products and sell new ones <br /> and see your
          account.
        </h6>
        <h5 className="text-center profile-points">Your Current Points:</h5>
        <h5>{user?.totalPoints}</h5>
        <Link to="/profile/add-product">
          <button className="btn btn-danger custom-button">
            Add your product
          </button>
        </Link>
      </div>
      {/* <h5>{user.firstName}</h5>
      <h5>{user.lastName}</h5>
      <h5>{user.contactInfo}</h5>
      <h5>{user.email}</h5> */}

      <div className="product-cards-container">
        {products.map((product, i) => (
          <div key={i}>
            <Link to={"/products/" + product._id}>
              <ProductCard
                key={product._id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
              />{" "}
            </Link>
            <div className="d-flex justify-content-center footer-card">
              <Link to={"/product-edit/" + product._id}>
                <Button variant="primary" className=" mx-3 custom-button">
                  Edit it
                </Button>
              </Link>
              <DisplayFormButton
                product={product}
                user={user}
                fetchUpdatedUser={fetchUpdatedUser}
              />{" "}
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default ProfilePage;
