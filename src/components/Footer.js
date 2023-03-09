import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light text-center">
      <div className="footer-lila">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="footer-p">Need help? You can call us.</p>
              <p className="footer-p">
                +49 (0)20241xxxx Local Tariff <br />
                Monday - Sunday 09:00 - 21:00
              </p>
            </div>
            <div className="col-6">
              <p className="footer-p">You can write us.</p>
              <p className="footer-p">info@twicebutnice.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-orange">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="footer-p">
                {" "}
                All rights reserved © {new Date().getFullYear()} twicebutnice.
                by Gülsah Bayazit
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
