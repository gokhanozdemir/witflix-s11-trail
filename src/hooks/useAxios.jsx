import { authServiceAPI } from "../api/AuthServiceApi";
import { useState } from "react";

function useAxios() {
	const [data, setData] = useState(); // response datasını tutar
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function doRequest({ endpoint, requestData, method = 'get' }) {
		setLoading(true)
		return authServiceAPI[method](endpoint, requestData)
			.then(function (response) {
				console.log("Hook API Response", response);
				setData(response.data);
				setError(null);

				return response;
			})
			.catch(function (error) {
				console.log("Hook API Error", error);
				setError(error)
				return error
			})
			.finally(() => {
				setLoading(false);
			});

	}

	return { data, setData, doRequest, loading, error }
}

export default useAxios