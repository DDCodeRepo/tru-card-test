import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authToggle } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import "./sign-in-form.styles.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const auth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    console.log("SI", { auth });
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
    if (email === "admin" && password === "admin123") {
      dispatch(authToggle(true));
      navigate("/home");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <img className="tru-img1" src={require("../../assets/TruCard-Logo.png")} alt="TruCard" />
        <h3>Login Here</h3>
        <label>Username</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button btnStyle="login-btn" label="Log In"/>
      </form>
    </>
  );
};

export default SignInForm;
