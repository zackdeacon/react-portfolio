import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function MERNProject(props) {
    return (
        <div className="col-sm-5">
        <div className="card card-p">
          <h5 className="card-header">{props.title}</h5>
          <a href={props.projectLink} target="_blank">
          <img src={props.pic} className="card-img-top project-card-pic picSize img-fluid" alt={props.alt}></img>
          </a>
          <div className="card-footer card-footer-height">
            <p>{props.about}</p>
            <a href={props.githubFrontEnd} target="_blank" className="btn btn1 contactSpacing mernbtn1">{props.githubLinkFrontEnd}</a>
            <a href={props.githubBackEnd} target="_blank" className="btn btn1 contactSpacing mernbtn2">{props.githubLinkBackEnd}</a>
          </div>
        </div>
      </div>
)
}
