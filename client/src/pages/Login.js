import React from "react";
import { Link } from "react-router-dom";
import Header_Login_Signup from "../components/Header_Login_Signup";

const Login = () => {
	return (
		<div>
			<Header_Login_Signup />

			<div className="form-container">
				{/* <h2>Login</h2> */}
				<form>
					<div>
						<label>Email</label>
						<input type="text" />
					</div>

					<div>
						<label>Password</label>
						<input type="password" />
					</div>

					<button>Login</button>
					<p>
						Don't have an account? <Link to="/signup">Create one</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
