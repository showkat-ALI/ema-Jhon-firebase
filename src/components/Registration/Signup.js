import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="log-in-container">
      <div className="login">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            name="u"
            placeholder="Username"
            required="required"
          />
          <br />
          <br />
          <br />
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
          <input
            type="password"
            name="p"
            placeholder="Confirm-Password"
            required="required"
          />
          <br />
          <br />
          <br />

          <button type="submit" className="btn btn-primary btn-block btn-large btn-regular">
            Sign UP
          </button>
        </form>
        <p>
          Already have a account <Link to="/login">Log in </Link>
        </p>
        <div>------- or--------</div>
      <button className="btn btn-regular">Sign in Google</button>
      </div>
      
    </div>
    );
};

export default Signup;