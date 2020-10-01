import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Portfolio.sass';

const Portfolio = () => {

    //=====================  start Ul_Portfolio json
  const [Ul, setUl] = useState([])

  useEffect(() => {
    axios.get('js/data.json').then(res => setUl(res.data.Ul_Portfolio))
  }, [])
  
  const li = Ul.map((liItem) => {
    return (
      <li className="text-center" key={liItem.id} >
        {liItem.Text}
      </li>
    )
  } )
  //=====================  end Ul_Portfolio json
  // =================== start images json 
  const [images, seImages] = useState([])

  useEffect(() => {
    axios.get('js/data.json').then(res => { seImages(res.data.Portfolio) })
  }, [])

  const image = images.map((imageItem) => {
    return (
      <div className="imageBox col-lg-3 col-md-6" key={imageItem.id}>
        <div className="overlay"> <span>View</span> </div>
        <img className="w-100" src={imageItem.image} alt="..." />
      </div>
    )
  })
  //=====================  end images json

    return (
      <div className = "Portfolio" >
        <div className="row">
          <h2 className="col-12 text-center" >Portfolio</h2>
          <ul className="col-12 w-100">
            {li}
          </ul>
          {image}
        </div>
      </div>
    );
}

export default Portfolio;
