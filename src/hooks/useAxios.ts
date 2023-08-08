import { useEffect, useState } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface IAxiosState {
	loading: boolean;
	data: null | AxiosResponse;
	error: null | AxiosError;
}

const useAxios = (options: AxiosRequestConfig, axiosInstance = axios) => {
	const [state, setState] = useState<IAxiosState>({
		loading: true,
		error: null,
		data: null,
	});

	const [trigger, setTrigger] = useState(0);

	const refetch = () => {
		setState({ ...state, loading: true });
		setTrigger(Date.now());
	};

	useEffect(() => {
		axiosInstance(options)
			.then((data) => {
				setState({ ...state, loading: false, data });
			})
			.catch((error) => {
				setState({ ...state, loading: false, error });
			});
	}, [trigger]);
	return { ...state, refetch };
};

export default useAxios;
