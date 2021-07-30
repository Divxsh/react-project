import React from "react";
import "../style/Profile.css";
import { Button } from "react-bootstrap";

const button = {
	width: "100px",
	borderRadius: "10px",
	fontSize: "0.9em",
};

export default function Card({ getData }) {
	let bio = getData.data.bio ? getData.data.bio : "No bio";
	let username = getData.data.name ? getData.data.name : "No name";
	return (
		<div className='profile'>
			<img src={getData.data.avatar_url} alt='' />
			<h2>{username}</h2>
			<span>{bio}</span>
			<a href={getData.data.html_url} target='_blank' rel='noreferrer'>
				<Button variant='dark' style={button}>
					FOLLOW
				</Button>
			</a>
			<div className='profile-stats'>
				<div className='followers  stat'>
					<span>FOLLOWERS</span>
					<p>{getData.data.followers}</p>
				</div>
				<div className='following stat '>
					<span>FOLLOWINGS</span>
					<p>{getData.data.following}</p>
				</div>
				<div className='star stat'>
					<span>REPOSITORIES</span>
					<p>{getData.data.public_repos}</p>
				</div>
			</div>
		</div>
	);
}
