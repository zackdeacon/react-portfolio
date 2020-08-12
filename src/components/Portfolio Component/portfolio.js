import React from 'react'
import "./style.css"

export default function Portfolio() {
    return (
        <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
            <div class="col-sm-5">
              <div class="card card-p">
                <h5 class="card-header">MixMe app!</h5>
                  <a href="https://vinavarghese.github.io/ProjectMixMe/" target="_blank">
                    <img src="assets/MixMe2.jpeg" class="card-img-top project-card-pic picSize" alt="Project link"></img>
                    </a>
                    <div class="card-footer card-footer-height">
                      <p>MixMe is an interactive platform that allows users to browse their favorite cocktails, search cocktail recipes by ingredient, play an interactive game to learn about their favorite cocktails, and find bars in their local area that serve the cocktails. MixMe uses Javascript, Foundation (CSS), CSS shake, and two APIs to source data. Feel free to click the picture to check it out and let me know any feedback you may have!</p>
                      <a href="https://github.com/VinAVarghese/ProjectMixMe" target="_blank" class="Github-link">Check out the Github Repo here!</a>
                    </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card card-p">
                <h5 class="card-header">PureCloud Electronics!</h5>
                <a href="https://purecloudone.herokuapp.com/" target="_blank">
                <img src="assets/PureCloud.jpeg" class="card-img-top project-card-pic picSize" alt="PureCloud app link"></img>
                </a>
                <div class="card-footer card-footer-height">
                  <p>PureCloud Electronics is a digital storefront that uses MySQL (Sequelize), Handlebars, Stripe integration and more! It was built in the MVC format, and allows for user login/authentification. Feel free to click the picture to check it out and let me know any feedback you may have!</p>
                  <a href="https://github.com/zackdeacon/Prime_Suspects" target="_blank" class="Github-link">Check out the Github Repo here!</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card card-p">
                <h5 class="card-header">Quiz app!</h5>
                <a href="https://zackdeacon.github.io/Password_generator_homework/" target="_blank">
                <img src="assets/Quiz2.jpeg" class="card-img-top project-card-pic picSize" alt="Quiz app"></img>
                </a>               
                <div class="card-footer card-footer-height">
                  <p>This is an quiz game that I developed! It will prompt you through a series of 5 questions and it has a timer that will end the game when time runs out. Once you have completed all of the questions, the remaining time will become your score. Feel free to click the picture to check it out and let me know any feedback you may have. Have fun!</p>
                  <a href="https://github.com/zackdeacon/Quiz-homework" target="_blank" class="Github-link">Check out the Github Repo here!</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card card-p">
                <h5 class="card-header">Weather Dashboard App!</h5>
                <a href="https://zackdeacon.github.io/Weather-app-homework/" target="_blank">
                <img src="assets/WeatherApp2.jpeg" class="card-img-top project-card-pic picSize" alt="weather app link"></img>
                </a>
                <div class="card-footer card-footer-height">
                  <p>This app uses local storage, Javascript, CSS, and 3rd party API data to allow a user to search for the weather related info of a certain city. The app will provide current conditions, a five day forecast, and the UV index. 
    
                    This app calls on data from a weather API. Feel free to click the picture to check it out and let me know any feedback you may have!</p>
                    <a href="https://zackdeacon.github.io/Weather-app-homework/" target="_blank" class="Github-link">Check out the Github Repo here!</a>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="card card-p">
                <h5 class="card-header">React employee directory!</h5>
                <a href="https://mighty-savannah-44325.herokuapp.com/" target="_blank">
                <img src="assets/react-employee-directory.jpeg" class="card-img-top project-card-pic picSize" alt="employee directory app link"></img>
                </a>
                <div class="card-footer card-footer-height">
                  <p>This app is built using React and utilizes an API through Ajax. This app allows a user to search through the user directory and filter by first name and last name. Enjoy!</p>
                    <a href="https://github.com/zackdeacon/react-employee-directory-hw" target="_blank" class="Github-link">Check out the Github Repo here!</a>
                </div>
              </div>
            {/* <div class="col mb-4">
                <div class="card card-p">
                    <h5 class="card-header">Project Title!</h5>
                    <a href="https://www.disney.com/" target="_blank">
                  <img src="https://placekitten.com/200/287" class="card-img-top" alt="...">
                    </a>
                    <div class="card-footer">
                      <p>Text describing the project and its components</p>
                    </div>
                </div>
            </div>     --> */}
          </div>
      </div> 
      </div>
        )
}
