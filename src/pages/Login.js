import "./login.css";   

export const Login = () => {
  return (
    <body>
      <div class="container">
        <input type="checkbox" id="flip" />
        <div class="cover">
          <div class="front">
            <img
              class="frontImg"
              src="https://thumbs.dreamstime.com/b/young-black-freelancer-woman-working-laptop-home-office-taking-notes-sitting-desk-near-window-looking-screen-writing-198331565.jpg"
              alt=""
            />
            <div class="text">
              <span class="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span class="text-2">Let's get connected</span>
            </div>
          </div>
          <div class="back">
            <img
              class="backImg"
              src="https://img.freepik.com/premium-photo/smiling-african-american-man-sitting-desk-working-laptop-taking-notes-notebook-black-male-studying-online_116547-26697.jpg?w=2000"
              alt=""
            />
            <div class="text">
              <span class="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span class="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Login</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div class="text sign-up-text">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div class="signup-form">
              <div class="title">Signup</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div class="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
