import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Socailmedia.sass";

const Socailmedia = () => {
	const [Socailmedia, setSocailmedia] = useState([]);

	useEffect(() => {
	  axios.get("js/data.json").then((res) => {
	    setSocailmedia(res.data.Socailmedia);
	  });
	}, []);
	const socail = Socailmedia.map((socailItem) => {
		return (
            <div key={socailItem.id} className = {`col-md-4 col-ms-12  ${socailItem.class}`} >
				<div className="row">
				    <div className="col-3 parent_i">
					    <i className={socailItem.icon}></i>
				    </div>
				    <div className="col-9 parent_p">
					    <p> {socailItem.title} </p>
					    <p> {socailItem.body} </p>
					</div>
				</div>
		    </div>
		);
	});
  return (
	  <div className="Socailmedia">
		    <div className="row">
                    {socail}
			    </div>
    </div>
  ) 
};

export default Socailmedia;
