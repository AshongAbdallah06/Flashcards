import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Study from "./pages/Study";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<h1>Welcome</h1>}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="/study/1"
					element={<Study />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
