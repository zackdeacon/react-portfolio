import React from 'react'
import "./style.css"
import Project from "../Project Component/project"


export default function Portfolio() {
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
            <Project title="PureCloud Electronics"
            about="PureCloud Electronics is a digital storefront that uses MySQL (Sequelize), Handlebars, Stripe integration and more! It was built in the MVC format, and allows for user login/authentification. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Check out the Github Repo here!"
            github="https://github.com/zackdeacon/Prime_Suspects"
            alt="PureCloud Image"
            pic={require("../../Assets/PureCloud.jpeg")}
            projectLink="https://purecloudone.herokuapp.com/"
            />
            <Project title="MixMe app!"
            about="MixMe is an interactive platform that allows users to browse their favorite cocktails, search cocktail recipes by ingredient, play an interactive game to learn about their favorite cocktails, and find bars in their local area that serve the cocktails. MixMe uses Javascript, Foundation (CSS), CSS shake, and two APIs to source data. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Check out the Github Repo here!"
            github="https://github.com/VinAVarghese/ProjectMixMe"
            alt="Mixme Image"
            pic={require("../../Assets/MixMe2.jpeg")}
            projectLink="https://vinavarghese.github.io/ProjectMixMe/"
            />
            <Project title="React employee directory!"
            about="This app is built using React and utilizes an API through Ajax. This app allows a user to search through the user directory and filter by first name and last name. Enjoy!"
            githubLink="Check out the Github Repo here!"
            github="https://github.com/zackdeacon/react-employee-directory-hw"
            alt="React Directory Image"
            pic={require("../../Assets/react-employee-directory.jpeg")}
            projectLink="https://mighty-savannah-44325.herokuapp.com/"
            />
            <Project title="Quiz app!"
            about="This is an quiz game that I developed! It will prompt you through a series of 5 questions and it has a timer that will end the game when time runs out. Once you have completed all of the questions, the remaining time will become your score. Feel free to click the picture to check it out and let me know any feedback you may have. Have fun!"
            githubLink="Check out the Github Repo here!"
            github="https://github.com/zackdeacon/Quiz-homework"
            alt="Quiz app Image"
            pic={require("../../Assets/Quiz2.jpeg")}
            projectLink="https://zackdeacon.github.io/Quiz-homework"
            />
            <Project title="Weather Dashboard App!"
            about="This app uses local storage, Javascript, CSS, and 3rd party API data to allow a user to search for the weather related info of a certain city. The app will provide current conditions, a five day forecast, and the UV index. 
    
            This app calls on data from a weather API. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Check out the Github Repo here!"
            github="https://github.com/zackdeacon/Weather-app-homework"
            alt="Weather App Image"
            pic={require("../../Assets/WeatherApp2.jpeg")}
            projectLink="https://zackdeacon.github.io/Weather-app-homework/"
            />
            <Project title="Restaraunt Burger App"
            about="This is an app that will allow to keep track of different eaten burgers at a restaraunt. This app uses MySQL and allows users full CRUD abilities to Create, Remove, Update and Delete data from the database. This app is fully deployed to Heroku."
            githubLink="Check out the Github Repo here!"
            github="https://github.com/zackdeacon/burger_hw"
            alt="Burger App Image"
            pic={require("../../Assets/burger_hw_pic.jpeg")}
            projectLink="https://zacks-burger-app.herokuapp.com/"
            />
      </div> 
      </div>
        )
}
