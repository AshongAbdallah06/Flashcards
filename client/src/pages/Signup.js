import React from "react";
import { Link } from "react-router-dom";
import Header_Login_Signup from "../components/Header_Login_Signup";

const Signup = () => {
	return (
		<div>
			<Header_Login_Signup />

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
