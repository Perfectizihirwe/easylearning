import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email == "") {
      alert("Please enter email");
      return;
    }
    if (password == "") {
      alert("Please enter password");
      return;
    }
    if (email == "" && password == "") {
      alert("Please enter email and password");
      return;
    }
    if (email.includes("@easylearning.student")) {
      navigate("/courses");
    } else {
      window.location.href = "https://easylearningdashboard.vercel.app/";
    }
  };

  return (
    <div className="containerAll">
      <div className="container1">
        <input type="checkbox" id="flip" />
        <div className="cover1">
          <div className="front1">
            <img
              className="frontImg1"
              src="https://thumbs.dreamstime.com/b/young-black-freelancer-woman-working-laptop-home-office-taking-notes-sitting-desk-near-window-looking-screen-writing-198331565.jpg"
              alt=""
            />
            <div className="text1">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back1">
            <img
              className="backImg1"
              src="https://img.freepik.com/premium-photo/smiling-african-american-man-sitting-desk-working-laptop-taking-notes-notebook-black-male-studying-online_116547-26697.jpg?w=2000"
              alt=""
            />
            <div className="text1">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms1">
          <div className="form-content1">
            <div className="login-form1">
              <div className="title1">Login</div>
              <div>
                <div className="input-boxes1">
                  <div className="input-box1">
                    <i className="fas fa-envelope"></i>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box1">
                    <i className="fas fa-lock"></i>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text1">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="text1 sign-up-text1">
                    !Use yourname@easylearning.student! for student and
                    yourname@easylearning.admin to access admin dashboard
                  </div>
                  <div className="button1 input-box1">
                    <button
                      style={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        backgroundColor: "#007bff",
                        padding: "10px 20px",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>
                  <div className="text1 sign-up-text1">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="signup-form1">
              <div className="title1">Signup</div>
              <div>
                <div className="input-boxes1">
                  <div className="input-box1">
                    <i className="fas fa-user1"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box1">
                    <i className="fas fa-envelope"></i>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box1">
                    <i className="fas fa-lock"></i>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button1 input-box1">
                    <button
                      style={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        backgroundColor: "#007bff",
                        padding: "10px 20px",
                        width: "100%",
                        textAlign: "center",
                        fontWeight: "bold",
                        borderRadius: "5px",
                      }}
                      onClick={handleLogin}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="text1 sign-up-text1">
                    !Use yourname@easylearning.student! for student and
                    yourname@easylearning.admin to access admin dashboard
                  </div>
                  <div className="text1 sign-up-text1">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
