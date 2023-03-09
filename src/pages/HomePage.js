import { Link } from "react-router-dom";
import header1 from "../images/header1.jpg";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import "../App.css";

function HomePage() {
  return (
    <div className="px-5 pb-5">
      <div style={{ position: "relative" }}>
        <img
          className="container-fluid"
          src={header1}
          alt="Header Image"
          style={{ opacity: "0.9" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <Link to="/products">
            <button className="btn btn-danger">Start shopping!</button>
          </Link>
          <h6 className="tagline">
            "Choose sustainability, choose secondhand furniture!"
          </h6>
        </div>
      </div>
      <div className="row align-items-center pt-5 text-center home-text">
        <h7>
          Twice but Nice. website that is based on a pointing system provides a
          sustainable approach to buying and selling furniture. We encourage
          people to recycle and reuse furniture items by providing a point
          system instead of money. This system helps to promote sustainability
          by extending the life of furniture items, reducing the amount of waste
          that goes to landfills, and reducing the carbon footprint associated
          with producing new furniture. Climate change is a major concern, and
          the production of new furniture contributes to carbon emissions. By
          encouraging the reuse of furniture, the website is doing its part to
          combat climate change by reducing the demand for new furniture
          production. The pointing system also provides an incentive for people
          to buy and sell second-hand furniture, which helps to support a
          circular economy and reduces the impact on the environment.
        </h7>
      </div>
      <div className="row align-items-center pt-5">
        <div className="col-sm-6 col-md-8">
          <img className="container-fluid" src={home1} />
        </div>
        <div class="col-sm-6 col-md-4">
          <h4>Affordability and Uniqueness</h4>
          <p className="home-p">
            Buying and selling second-hand furniture can be an affordable option
            compared to buying brand new furniture. This is particularly true
            for higher-end pieces, which can be purchased at a fraction of the
            cost. Additionally, second-hand furniture provides the opportunity
            to find unique and one-of-a-kind pieces that you might not be able
            to find elsewhere. Vintage and antique furniture can be particularly
            sought-after, adding character and charm to any home. Furthermore,
            buying and selling second-hand furniture allows you to mix and match
            different styles and eras, creating a unique and personalized look
            that reflects your personality and style.
          </p>
        </div>
      </div>

      <div class="row align-items-center pt-5">
        <div class="col-sm-6 col-md-4">
          <h4>Sustainability and Quality</h4>
          <p className="home-p">
            One of the major benefits of buying and selling second-hand
            furniture is that it is more sustainable than buying new furniture.
            By extending the lifespan of furniture that might otherwise end up
            in a landfill, second-hand furniture helps to reduce waste and has a
            positive impact on the environment. Additionally, older pieces are
            often made with better materials and craftsmanship, meaning that
            they can last longer and be more durable than newer furniture. This
            means that buying second-hand furniture can be a more sustainable
            and cost-effective investment in the long run.{" "}
          </p>
        </div>
        <div class="col-sm-6 col-md-8">
          <img className="container-fluid" src={home2} />
        </div>

        <div class="row align-items-center pt-5">
          <div class="col-sm-6 col-md-8">
            <img className="container-fluid" src={home3} />
          </div>
          <div class="col-sm-6 col-md-4">
            <h4>Supporting Local Businesses and Flexibility</h4>
            <p className="home-p">
              Buying and selling second-hand furniture can also be a great way
              to support local businesses such as consignment shops, thrift
              stores, and online marketplaces. By purchasing from these
              businesses, you can help to support the local economy and small
              business owners. Additionally, buying second-hand furniture
              provides more flexibility when it comes to styling your home. It
              allows you to mix and match different styles and eras, creating a
              unique and personalized look that reflects your personality and
              style. With a wider range of options available than just buying
              new furniture, you can find the perfect pieces to create a home
              that is both functional and stylish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
