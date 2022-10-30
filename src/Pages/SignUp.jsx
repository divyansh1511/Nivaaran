import Header from "../Components/Header";
import { motion } from "framer-motion";

function SignUp() {
  return (
    <motion.div
    initial = {{width : 0}}
    animate = {{width : "100%"}}
    exit = {{ x : window.innerWidth , transition : {duration : 0.1}}}
    >
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="signup-form">
              <form action="" class="mt-5 border p-4 bg-light shadow">
                <h3 class="mb-5 text-primary">Create Your Account</h3>
                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label>
                      First Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      class="form-control"
                      placeholder="Enter First Name"
                    ></input>
                  </div>

                  <div class="mb-3 col-md-6">
                    <label>
                      Last Name<span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      class="form-control"
                      placeholder="Enter Last Name"
                    ></input>
                  </div>

                  <div class="mb-3 col-md-12">
                    <label>
                      Email Address<span class="text-danger">*</span>
                    </label>
                    <input
                      type="Email"
                      name="Email"
                      class="form-control"
                      placeholder="Enter Email"
                    ></input>
                  </div>

                  <div class="mb-3 col-md-12">
                    <label>
                      Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      placeholder="Enter Password"
                    ></input>
                  </div>
                  <div class="mb-3 col-md-12">
                    <label>
                      Confirm Password<span class="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      name="confirmpassword"
                      class="form-control"
                      placeholder="Confirm Password"
                    ></input>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-primary float-end">
                      Signup Now
                    </button>
                  </div>
                </div>
              </form>
              <p class="text-center mt-3 text-primary">
                If you have account, Please{" "}
                <a href="login" style={{ color: "blue" }}>
                  <strong>Login Now</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SignUp;
