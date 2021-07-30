import React from "react";
import Card from "./Component/Profilecard";
import Searchbar from "./Component/Searchbar";
import { useFetch } from "./CustomHook";

export default function App() {
	const getData = useFetch();
	return (
		<div className='cont'>
			<Searchbar getData={getData} />
			<Card getData={getData} />
		</div>
	);
}
