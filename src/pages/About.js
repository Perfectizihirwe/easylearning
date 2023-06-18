export const About = () => {
  return (
    <body>
      <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center text-white">
              <small>
                <i class="fa fa-phone-alt mr-2"></i>+250 788 233 560
              </small>
              <small class="px-3">|</small>
              <small>
                <i class="fa fa-envelope mr-2"></i>kevineineza@gmail.com
              </small>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-white px-2" href="">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="text-white px-2" href="">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="text-white pl-2" href="">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <a href="/" class="navbar-brand ml-lg-3">
            <h1 class="m-0 text-uppercase text-primary">
              <i class="fa fa-book-reader mr-3"></i>EasyLearning
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between px-lg-3"
            id="navbarCollapse"
          >
            <div class="navbar-nav mx-auto py-0">
              <a href="/" class="nav-item nav-link">
                Home
              </a>
              <a href="about" class="nav-item nav-link active">
                About
              </a>
              <a href="courses" class="nav-item nav-link">
                Courses
              </a>
            </div>
            <a href="login" class="btn btn-primary py-2 px-4 d-none d-lg-block">
              Enroll Now
            </a>
          </div>
        </nav>
      </div>

      <div
        class="jumbotron jumbotron-fluid page-header position-relative overlay-bottom"
        style={{
          marginBottom: "90px",
        }}
      >
        <div class="container text-center py-5">
          <h1 class="text-white display-1">About</h1>
          <div class="d-inline-flex text-white mb-5">
            <p class="m-0 text-uppercase">
              <a class="text-white" href="">
                Home
              </a>
            </p>
            <i class="fa fa-angle-double-right pt-1 px-3"></i>
            <p class="m-0 text-uppercase">About</p>
          </div>
          <div
            class="mx-auto mb-5"
            style={{
              width: "100%",
              maxWidth: "600px",
            }}
          >
            <div class="input-group">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-light bg-white text-body px-4 dropdown-toggle"
                  type="button"
                >
                  Courses
                </button>
              </div>
              <input
                type="text"
                class="form-control border-light"
                style={{
                  padding: "30px 25px",
                }}
                placeholder="Keyword"
              />
              <div class="input-group-append">
                <button class="btn btn-secondary px-4 px-lg-5">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row">
            <div
              class="col-lg-5 mb-5 mb-lg-0"
              style={{
                minHeight: "500px",
              }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100"
                  src="img/about.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  About Us
                </h6>
                <h1 class="display-4">
                  First Choice For Online Education Anywhere
                </h1>
              </div>
              <p>
                We invite you to embark on this extraordinary educational
                journey with us. Applying to EASYLEARNING is a simple and
                seamless process. Please review the enclosed admission
                requirements and deadlines, and do not hesitate to contact our
                admissions team with any questions. We look forward to welcoming
                you to our school community.
              </p>
              <div class="row pt-3 mx-0">
                <div class="col-3 px-0">
                  <div class="bg-success text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Available<span class="d-block">Subjects</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-primary text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Online<span class="d-block">Courses</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-secondary text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Skilled<span class="d-block">Instructors</span>
                    </h6>
                  </div>
                </div>
                <div class="col-3 px-0">
                  <div class="bg-warning text-center p-4">
                    <h1 class="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 class="text-uppercase text-white">
                      Happy<span class="d-block">Students</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <div class="section-title position-relative mb-4">
                <h6 class="d-inline-block position-relative text-secondary text-uppercase pb-2">
                  Why Choose Us?
                </h6>
                <h1 class="display-4">
                  Why You Should Start Learning with Us?
                </h1>
              </div>
              <p class="mb-4 pb-2">
                We embrace the individuality of each student and offer
                comprehensive support systems to ensure their holistic
                development. Our dedicated faculty and staff provide
                personalized guidance, nurturing every student's unique
                strengths and assisting them in overcoming challenges. We offer
                a range of counseling services, mentorship programs, and
                leadership opportunities to help students discover their true
                potential.
              </p>
              <div class="d-flex mb-3">
                <div class="btn-icon bg-primary mr-4">
                  <i class="fa fa-2x fa-graduation-cap text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>Skilled Instructors</h4>
                  <p>
                    Our instructors are hand picked from the most prestigious
                    universities in the world. They are highly skilled and
                    experienced educators who are passionate about teaching.
                  </p>
                </div>
              </div>
              <div class="d-flex mb-3">
                <div class="btn-icon bg-secondary mr-4">
                  <i class="fa fa-2x fa-certificate text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>International Certificate</h4>
                  <p>
                    At the end of a course you receive a highly recognised
                    certificate that you can use to get a job or start your own
                    business.
                  </p>
                </div>
              </div>
              <div class="d-flex">
                <div class="btn-icon bg-warning mr-4">
                  <i class="fa fa-2x fa-book-reader text-white"></i>
                </div>
                <div class="mt-n1">
                  <h4>Online Classes</h4>
                  <p class="m-0">
                    Our classes are fully virtual allowing access from anywhere
                    in the world
                  </p>
                </div>
              </div>
            </div>
            <div
              class="col-lg-5"
              style={{
                minHeight: "500px",
              }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100"
                  src="img/feature.jpg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="container-fluid position-relative overlay-top bg-dark text-white-50 py-5"
        style={{
          marginTop: "90px",
        }}
      >
        <div class="container mt-5 pt-5">
          <div class="row">
            <div class="col-md-6 mb-5">
              <a href="/" class="navbar-brand">
                <h1 class="mt-n2 text-uppercase text-white">
                  <i class="fa fa-book-reader mr-3"></i>EasyLearning
                </h1>
              </a>
              <p class="m-0">
                EasyLearning is a personal development platform that allows you
                to access your training records, book training and receive
                reminders. It is an e-learning website that can be accessed from
                anywhere via the web1.
              </p>
            </div>
            <div class="col-md-6 mb-5">
              <h3 class="text-white mb-4">Newsletter</h3>
              <div class="w-100">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control border-light"
                    style={{
                      padding: "30px",
                    }}
                    placeholder="Your Email Address"
                  />
                  <div class="input-group-append">
                    <button class="btn btn-primary px-4">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Get In Touch</h3>
              <p>
                <i class="fa fa-map-marker-alt mr-2"></i>24V3+QPF, Kigali AUCA
                Gishushu, USA
              </p>
              <p>
                <i class="fa fa-phone-alt mr-2"></i>+250 788 233 560
              </p>
              <p>
                <i class="fa fa-envelope mr-2"></i>kevineineza@gmail.com
              </p>
              <div class="d-flex justify-content-start mt-4">
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-twitter"></i>
                </a>
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-facebook-f"></i>
                </a>
                <a class="text-white mr-4" href="#">
                  <i class="fab fa-2x fa-linkedin-in"></i>
                </a>
                <a class="text-white" href="#">
                  <i class="fab fa-2x fa-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Our Courses</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Web Design
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Apps Design
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Marketing
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Research
                </a>
                <a class="text-white-50" href="#">
                  <i class="fa fa-angle-right mr-2"></i>SEO
                </a>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <h3 class="text-white mb-4">Quick Links</h3>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Privacy Policy
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Terms & Condition
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Regular FAQs
                </a>
                <a class="text-white-50 mb-2" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Help & Support
                </a>
                <a class="text-white-50" href="#">
                  <i class="fa fa-angle-right mr-2"></i>Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="btn btn-lg btn-primary rounded-0 btn-lg-square back-to-top"
      >
        <i class="fa fa-angle-double-up"></i>
      </a>
    </body>
  );
};
