import kon from "../images/kon.png";
import koko from "../images/koko.jpeg";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function EarningPointsPage() {
  return (
    <div class="container">
      <div class="row points text-center">
        <div class="col">
          <h8>Yes, you’ve successfully signed up!</h8>
          <br />
          <h8>And earned 200 points!</h8>
          <div>
            <img className="earning-img" src={kon} />
            <p className="points-p">
              Earning points to buy your first piece of second-hand furniture is
              a great way to encourage sustainable habits while also saving
              money. <br />
              By participating in programs that reward users for buying or
              selling second-hand furniture. <br /> This creates a cycle of
              reuse that benefits both the environment and your wallet. <br />{" "}
              Let's make sustainability your style!
            </p>
          </div>
          <Link to={"/login"} className="signup">
            <Button className="custom-button " type="submit">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EarningPointsPage;
