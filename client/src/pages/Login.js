import React from "react";
import { Link } from "react-router-dom";
import HeaderLoginSignup from "../components/HeaderLoginSignup";

const Login = () => {
	return (
		<div>
			<HeaderLoginSignup />

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
