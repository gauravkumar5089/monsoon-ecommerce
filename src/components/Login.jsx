import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(
    to right,
    rgba(106, 17, 203, 1),
    rgba(37, 117, 252, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export default function Login() {
  return (
    <Section>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-md-6 col-lg-4">
            <div
              class="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div class="card-body px-5 py-5 text-center">
                <div class="my-1 mx-0">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-4">
                    Please enter your login and password!
                  </p>

                  <div class="form-floating  mb-3">
                    <input
                      type="email"
                      class="form-control bg-dark text-primary "
                      id="email"
                      placeholder=" "
                    />
                    <label for="floatingInput" class="text-light">
                      Email address
                    </label>
                  </div>
                  <div class="form-floating  mb-3">
                    <input
                      type="password"
                      class="form-control bg-dark text-primary "
                      id="password"
                      placeholder=" "
                    />
                    <label for="floatingInput" class="text-light">
                      Password
                    </label>
                  </div>

                  <p class="small mb-5 pb-lg-2">
                    <a class="text-white-50" href="#!">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    class="btn btn-outline-primary btn-lg px-5"
                    type="submit"
                  >
                    Login
                  </button>

                  <div class="d-flex justify-content-center text-center my-3 pt-1">
                    <a href="#!" class="text-primary">
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#!" class="text-primary">
                      <i class="fa-brands fa-twitter mx-4 px-2"></i>
                    </a>
                    <a href="#!" class="text-primary">
                      <i class="fa-brands fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p class="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
