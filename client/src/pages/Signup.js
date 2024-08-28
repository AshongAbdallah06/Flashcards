import React from "react";
import { Link } from "react-router-dom";
import HeaderLoginSignup from "../components/HeaderLoginSignup";

const Signup = () => {
	return (
		<div>
			<HeaderLoginSignup />

			<div className="form-container">
				{/* <h2>Signup</h2> */}
				<form>
					<div>
						<label>Email</label>
						<input type="text" />
					</div>

					<div>
						<label>Username</label>
						<input type="text" />
					</div>

					<div>
						<label>Password</label>
						<input type="password" />
					</div>

					<button>Signup</button>
					<p>
						Alrady have an account? <Link to="/login">Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
