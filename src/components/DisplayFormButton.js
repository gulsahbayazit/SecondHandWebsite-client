import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function DisplayFormButton({ product, user, fetchUpdatedUser }) {
  const [displayForm, setDisplayForm] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [message, setMessage] = useState(undefined);
  const navigate = useNavigate();
  const APIURL = process.env.REACT_APP_API_URL;
  const storedToken = localStorage.getItem("authToken");

  const handleClick = () => {
    setDisplayForm(!displayForm);
  };

  const handleInputChange = (event) => {
    setBuyerName(event.target.value);
  };

  const handleSell = (id, price) => {
    console.log(id, price, buyerName, user);
    axios
      .post(
        `${APIURL}/purchase`,
        { id, price, buyerName, user },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then((res) => {
        console.log(res);
        user.totalPoints = user.totalPoints + price;
        fetchUpdatedUser();
      })
      .catch((err) => setMessage(err.response.data.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <button className="btn mx-3 custom-button-lila" onClick={handleClick}>
        Sell it
      </button>
      {displayForm && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label>
              please write <br />
              buyer user name
              <div>
                <input
                  type="text"
                  value={buyerName}
                  onChange={handleInputChange}
                />
              </div>
            </label>
            <div style={{ marginTop: 3 }}>
              {message && <p>{message}</p>}
              <Link to="/purchase">
                <button
                  onClick={() => handleSell(product._id, product.price)}
                  className="btn btn-danger"
                  type="submit"
                  style={{ marginTop: 2 }}
                >
                  Approve it!
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default DisplayFormButton;
