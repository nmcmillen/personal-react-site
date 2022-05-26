<footer className="page-footer font-small" id="footer">
      <div className="container-fluid ">
        <div className="row" id="row-edit">
          <div
            className="col-md-6 mt-3 pl-3 justify-content-center"
            id="location"
          >
            <h5 className="text-uppercase">Nick McMillen</h5>
            <p>Full Stack Web Developer <br/>
            Awesome Inc. Bootcamp</p>
            <h5 className="text-uppercase">Find Me</h5>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faYoutube} size="lg" />
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
            <p>
              348 Main St.
              <br />
              Lexington, KY 40503 <br />
              123-456-7890 <br />
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0 d-flex justify-content-center text-center" />

          <div className="col-md-6">
            <img
              src={portrait}
              className="img-fluid"
              alt=""
              style={{ maxWidth: "390px" }}
            />
          </div>
        </div>
      </div>
    </footer>