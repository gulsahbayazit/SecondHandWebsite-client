import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

function DisplayFormButton({ product, user, fetchUpdatedUser }) {
  const [displayForm, setDisplayForm] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [message, setMessage] = useState(undefined);
  const navigate = useNavigate();
  const APIURL = "http://127.0.0.1:5005";
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
    // Do something with the buyer name
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

      {/* {displayForm && (
        <>
          <label>
            Buyer user name:
            <input type="text" value={buyerName} onChange={handleInputChange} />
          </label>
          <button
            onClick={() => handleSell(product._id, product.price)}
            className="btn btn-danger"
            type="submit"
          >
            Approve it!
          </button>
          {message && <p>{message}</p>}
        </>
      )} */}
    </div>
  );
}

export default DisplayFormButton;
