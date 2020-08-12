import React from 'react'
import "./style.css"

export default function contact() {
    return (
        <div className="parallaxContact">

        <div className="container contactContainer">
          <div className="row row-parallax-Contact">
        <div className="card text-center contactSpacing">
          <div className="card-header">
            Contact
          </div>
          <div className="card-body">
            <h5 className="card-title contactSpacing">Please select below which method you would like to contact me by!</h5>
            <p className="card-text contactSpacing">If you would like to discuss a business opportunity with me, please leave a preferred method of contact in your message (phone number, email etc).</p>
            <a href="mailto:zackdeacon347@gmail.com" className="btn btn1 contactSpacing">Email Me!</a>
            <a href="https://www.linkedin.com/in/zachary-deacon/" target="_blank" role="button" className="btn btn1 contactSpacing">LinkedIn</a> 
          </div>
          <div className="card-footer text-muted">
            Thank you for visiting my portfolio!
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}
