import kon from "../images/kon.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function PurchasePage() {
  return (
    <div class="container">
      <div class="row points text-center">
        <div class="col">
          <h8>Yes, you’ve sold your product!</h8>
          <br />
          <h8>And earned some points!</h8>
          <div>
            <img className="earning-img" src={kon} />
            <p className="points-p">
              By selling your pre-loved items, you're giving them a new lease of
              life and keeping them out of landfills, which helps reduce waste
              and conserves natural resources.
              <br />
              Thank you for supporting sustainability!
            </p>
          </div>
          <Link
            to={"/products"}
            className="signup"
            style={{ display: "inline-block", width: "20%" }}
          >
            <Button
              className="custom-button-lila"
              type="submit"
              style={{ width: "100%" }}
            >
              Buy sustainably
            </Button>
          </Link>
          <Link
            to={"/profile"}
            className="signup"
            style={{ display: "inline-block", width: "20%" }}
          >
            <Button
              className="custom-button "
              type="submit"
              style={{ width: "100%", marginLeft: "1rem" }}
            >
              Go back to your profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PurchasePage;
