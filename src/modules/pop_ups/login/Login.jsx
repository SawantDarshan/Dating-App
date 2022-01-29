import "./login.css";

const Login = () => {


  return (
    <div className="login-container">
      <button>close </button>
      <form className="login-modal">
        <div className="login-form-control">
          <label htmlFor="login-email">email: </label>
        <input type="email" id="login-email" />
        </div>
        <div className="login-form-control">
          <label htmlFor="login-password">password: </label>
        <input type="password" id="login-password"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
