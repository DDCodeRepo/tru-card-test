import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./login.styles.css";

const Login = () => {
  return (
    <div className="login-bg">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <SignInForm />
    </div>
  );
};

export default Login;
