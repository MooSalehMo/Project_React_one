import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./Profile.sass";

const Profile = () => {
	// ================================ start json info
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		axios.get("js/data.json").then((res) => {
			setSkills(res.data.Profile.Profile_langs);
		});
	}, []);

	const skill = skills.map((skillItem, index) => {
		return (
			<Fragment key={index}>
				{/* <p className="lead"> {skillItem.Pragraph} </p> */}
				<div className="parent_spans">
					<span> {skillItem.lang} </span>
					<span> {skillItem.pross} </span>
				</div>
			</Fragment>
		);
	});
	// ================================ end json info

	return (
		<div className="Profile">
			<div className="container">
				<div className="row">
					<h2 className="col-12 ">Information & Skills </h2>
					<div className="info col-md-12 col-lg-6">
						<ul>
							<li>Name: Mohamed Saleh Mohamed</li>
							<li>Brithday: 1/10/1998 </li>
							<li>Address: Cairo</li>
							<li>Phone: 222 444 888</li>
							<li>WebSit: www.MoSaleh.com</li>
							<li>Email: MoSaleh@gmail.com</li>
						</ul>
					</div>
					<div className="skills col-md-12 col-lg-6">
						<p className="lead">
							Lorem ipsum is placeholder text commonly used in the graphic print
							and publishing industries for previewing layouts and visual
							mockups
						</p>
						{skill}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
