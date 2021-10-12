import React from "react";
import { Link,useLocation,useHistory} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css"
const Login = () => {
  const{googleSignIN}= useAuth()
  const location = useLocation()
  const history = useHistory()
  const redirectUri = location.state?.from || '/shop'
  const handleGoogleSignin = ()=>{
    googleSignIN()
    .then((result) => {
      history.push(redirectUri)

  });
  }
  return (
    <div className="log-in-container">
      <div className="login">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            name="u"
            placeholder="Email"
            required="required"
          />
          <br />
          <br />
          <br />
          <input
            type="password"
            name="p"
            placeholder="Password"
            required="required"
          />
          <br />
          <br />
          <br />

          <button type="submit" className="btn btn-primary btn-block btn-large btn-regular">
            Let me in.
          </button>
        </form>
        <p>
          New to amazon? <Link to="/signup">Sign up</Link>
        </p>
        <div>------- or--------</div>
      <button className="btn btn-regular" onClick={handleGoogleSignin}>Sign in Google</button>
      </div>
      
    </div>
  );
};

export default Login;
