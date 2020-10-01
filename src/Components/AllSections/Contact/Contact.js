import React, { Component } from "react";
import "./Contact.sass";

class Contact extends Component {
	prev = (e) => {
		e.preventDefault();
	};
	render() {
		return (
      <div className="Contact">
        <div className="overlay"></div>
				<div className="container">
					<div className="row">
						<h2 className="col-12 text-center">Contact Me</h2>
						<form onSubmit={this.prev}>
							<input className="col-md-12 col-lg-6" type="text" placeholder="name" name="name" />
							<input className="col-md-12 col-lg-5 pull-right" type="password" placeholder="password" name="password" />
							<input className="col-12" type="email" placeholder="email" name="email" />
							<textarea className="col-12 " placeholder="Your Message" name="message" />
							<button className="btn col-12" placeholder="">Submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
