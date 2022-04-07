export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-contacts" id="contact">
        <h1 className="section-title">Reach out!</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 contact contact-left">
              <h6 className="contact-type">Phone Number</h6>
              <h1 className="contact-information">+91 7888535324</h1>
            </div>
            <div className="col-md-6 contact contact-right">
              <h6 className="contact-type">Email Address</h6>
              <h1 className="contact-information">
                himself@samlovescoding.com
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-copyright">
        Sampan Verma™ samlovescoding™ 2022 © All rights reserved
      </section>
    </footer>
  );
}
