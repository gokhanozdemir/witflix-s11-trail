/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import useLocalStorage from "../hooks/useLocalStorage";

/** For more det ails on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();


function useProvideAuth() {
	const key = 'userInfo';
	const initialUserData = {};
	const [user, setUser] = useLocalStorage(key, initialUserData);
	const history = useHistory();

	const signin = (loginData) => {
		const loginToaster = toast.loading('Please wait...');
		axios
			.post('https://dummyjson.com/auth/login', loginData)
			.then(function (response) {
				console.log(response);
				toast.update(loginToaster, {
					render: 'All is good, redirecting...',
					type: 'success',
					isLoading: false,
					closeOnClick: true,
					autoClose: 2000,
				});

				if (loginData.rememberMe) {
					console.log('response.data', response.data);
					setUser(response.data);
				}

				history.push('/who-is-watching');
			})
			.catch(function (error) {
				console.log(error);
				toast.update(loginToaster, {
					render: error.response.data.message,
					type: 'error',
					isLoading: false,
					closeOnClick: true,
					autoClose: 5000,
				});
			});
	};

	const signout = () => {
		setUser(null);
		history.push('/');
	};

	return {
		user,
		signin,
		signout
	};
}

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return (
		<authContext.Provider value={auth}>
			{children}
		</authContext.Provider>
	);
}

export function useAuth() {
	return useContext(authContext);
}



