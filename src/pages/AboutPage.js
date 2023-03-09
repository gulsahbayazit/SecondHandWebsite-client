import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about from "../images/about.jpg";
import "../App.css";
// import NavbarWithoutSearch from "./components/NavbarWithoutSearch";

function AboutPage() {
  return (
    <Container>
      {/* <NavbarWithoutSearch /> */}
      <Row className="d-flex align-items-center">
        <Col md={6} className="mx-auto">
          <img src={about} alt="Image" className="img-fluid" />
        </Col>
        <Col md={6} className="mx-auto text-center">
          <h2 className="pt-5">About Us</h2>
          <div className="about-text ">
            <p>
              Welcome to our second hand furniture website in Berlin! We are
              committed to promoting sustainability by enabling the exchange of
              furniture through a points-based system.
            </p>
            <p>
              {" "}
              With our platform, you can buy and sell second hand furniture
              using points. This system encourages the reuse of furniture,
              reducing waste and contributing to a more sustainable future.
            </p>
            <p>
              {" "}
              Our website is easy to use. You can browse a wide selection of
              furniture listings and filter them by category, location, and
              point value. When you find something you like, you can contact the
              seller directly through our platform to arrange a pickup or
              delivery.
            </p>

            <p>
              {" "}
              Join us in our mission to reduce waste and promote sustainability.
              By buying and selling second hand furniture through our website,
              you are not only saving money, but also helping to reduce your
              environmental impact.
            </p>
            <p>
              {" "}
              Thank you for joining us on this journey towards a more
              sustainable future! If you have any questions or feedback, please
              don't hesitate to contact us.
            </p>

            <p>Sincerely, The Twice but Nice. Team</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutPage;
