/* eslint-disable react/prop-types */
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
	let {
		user
	} = useAuth();

	return (
		<Route
			{...rest} // verilen diğer component proplarını taşır
			render={({ location }) =>
				user?.accessToken ? (
					children // ön tanımlı çocuk bileşenleri taşır.
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}