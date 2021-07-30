import { useState, useEffect, useCallback } from "react";

export const useFetch = () => {
	const [username, setUsername] = useState("Divxsh");
	const [data, setData] = useState({});
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`https://api.github.com/users/${username}`);
			const data = await res.json();
			setData(data);
		};
		fetchData();
	}, [username]);
	return {
		data,
		setData,
		search: useCallback((d) => {
			setUsername(d);
		}, []),
	};
};
