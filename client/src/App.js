import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Study from "./pages/Study";
import LandingPage from "./pages/LandingPage";
import SingleCard from "./pages/SingleCard";

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
				<Route
					path="/landing"
					element={<LandingPage />}
				/>
				<Route
					path="/singleCard"
					element={<SingleCard />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
