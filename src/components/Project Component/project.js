import React from 'react'
import "./style.css"

export default function project() {
    return (
        <div className="col-sm-5">
        <div className="card card-p">
          <h5 className="card-header">PureCloud Electronics!</h5>
          <a href="https://purecloudone.herokuapp.com/" target="_blank">
          <img src={require("../../Assets/PureCloud.jpeg")} className="card-img-top project-card-pic picSize" alt="PureCloud app link"></img>
          </a>
          <div className="card-footer card-footer-height">
            <p>PureCloud Electronics is a digital storefront that uses MySQL (Sequelize), Handlebars, Stripe integration and more! It was built in the MVC format, and allows for user login/authentification. Feel free to click the picture to check it out and let me know any feedback you may have!</p>
            <a href="https://github.com/zackdeacon/Prime_Suspects" target="_blank" className="Github-link">Check out the Github Repo here!</a>
          </div>
        </div>
      </div>
)
}
