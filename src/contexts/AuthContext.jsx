/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import useLocalStorage from "../hooks/useLocalStorage";
import useAxios from "../hooks/useAxios";


const authContext = createContext();

function useProvideAuth() {
	const key = 'userInfo';
	const initialUserData = {};

	const [_storedUser, setStoredUserInfo] = useLocalStorage(key, initialUserData);
	const history = useHistory();

	const { data: user, setData: setUser, doRequest } = useAxios();
	const signin = (loginData) => {
		const loginToaster = toast.loading('Please wait...');
		doRequest({ endpoint: '/login', requestData: loginData, method: 'post' })
			.then(function (response) {
				toast.update(loginToaster, {
					render: 'All is good, redirecting...',
					type: 'success',
					isLoading: false,
					closeOnClick: true,
					autoClose: 2000,
				});

				if (loginData.rememberMe) {
					setUser(response.data);
					setStoredUserInfo(response.data);
				} else {
					setUser(response.data);
				}

				history.push('/who-is-watching');
			}).catch(function (error) {
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
		setStoredUserInfo(null);
		history.push('/');
	};

	const isUserLoggedIn = () => {
		if (user?.accessToken) {
			return true;
		}
		return false;
	}

	const checkUserLoggedIn = () => {
		// TODO: Check with verify
		if (user?.accessToken) {
			history.push('/');
			return true;
		}
		return false;
	}

	return {
		user,
		signin,
		signout,
		isUserLoggedIn,
		checkUserLoggedIn
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
// 09-24 !
// çünkü öyle 
// <3
// bcs why not

