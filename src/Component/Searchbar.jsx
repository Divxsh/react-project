import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { GrSearch } from "react-icons/gr";
import "../style/searchbar.css";

const button = {
	width: "auto",
	fontSize: "1.5em",
};
const input = {
	maxWidth: "30.5rem",
	minWidth: "12rem",
};

export default function Searchbar({ getData }) {
	const [username, setUsername] = useState();
	return (
		<>
			<InputGroup
				className='mb-3 inputBox'
				style={input}
				onChange={(e) => {
					
					e.target.value ? setUsername(e.target.value) :  getData.search("Divxsh")
				}}
			>
				<FormControl
					placeholder='Divxsh'
					aria-label="Recipient's username"
					aria-describedby='basic-addon2'
				/>
				<Button
					variant='outline-secondary'
					id='button-addon2'
					style={button}
					onClick={() => {
						username
							? getData.search(username)
							: getData.search("Divxsh");
					}}
				>
					<GrSearch />
				</Button>
			</InputGroup>
		</>
	);
}
