import React, { Component } from "react";
import axios from "axios";
import "./Work.sass";

class Work extends Component {
	state = {
		Works: [],
	};
	componentDidMount = () => {
		axios.get("js/data.json").then((res) => {
			this.setState({ Works: res.data.Works });
		});
	};

	render() {
		const { Works } = this.state;
		const Work = Works.map((WorkItem) => {
			return (
			<div key = { WorkItem.id } className = "col-lg-4 col-md-12" >
				<div className="box">
					<i className={WorkItem.icon_name}></i>
					<hr />
					<h3>{WorkItem.title}</h3>
			        <p>{WorkItem.pragraph}</p>
				</div>
			</div>
			)
		});
		return (
			<div className="work">
				<div className="container">
					<div className="row">
						<h2 className="col-12 text-center">Works</h2>
						{Work}
					</div>
				</div>
			</div>
		);
	}
}

export default Work;
