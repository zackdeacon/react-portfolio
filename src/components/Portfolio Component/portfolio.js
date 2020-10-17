import React from 'react'
import "./style.css"
import Project from "../Project Component/project"
import MERNProject from "../Project Component/MERNproject"



export default function Portfolio() {
    return (
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
            <MERNProject title="PLANiT"
            about="PLANiT is a full stack MERN applictaion built in React, that uses technologies such as: Socket.io, Nodemailer, Ajax, MongDB (Mongoose), Node, react-scroll, react-animate-on-scroll and ant-design. PLANiT is a travel application that allows you to plan with your friends and offers real-time chat room communication as well as a voting and invitation system for you to plan your next trip."
            githubLinkFrontEnd="Front-end Github Repo"
            githubLinkBackEnd="Back-end Github Repo"
            githubFrontEnd="https://github.com/zackdeacon/planit-frontend"
            githubBackEnd="https://github.com/zackdeacon/planit-backend"
            alt="Planit Image"
            pic={require("../../Assets/PLANiT.jpeg")}
            projectLink="https://travelplanit.herokuapp.com/"
            />
            <Project title="PureCloud Electronics"
            about="PureCloud Electronics is a digital storefront that uses MySQL (Sequelize), Handlebars, Stripe integration and more! It was built in the MVC format, and allows for user login/authentification. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/Prime_Suspects"
            alt="PureCloud Image"
            pic={require("../../Assets/PureCloud.jpeg")}
            projectLink="https://purecloudone.herokuapp.com/"
            />
            <Project title="MixMe app!"
            about="MixMe is an interactive platform that allows users to browse their favorite cocktails, search cocktail recipes by ingredient, play an interactive game to learn about their favorite cocktails, and find bars in their local area that serve the cocktails. MixMe uses Javascript, Foundation (CSS), CSS shake, and two APIs to source data. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Github Repo"
            github="https://github.com/VinAVarghese/ProjectMixMe"
            alt="Mixme Image"
            pic={require("../../Assets/MixMe2.jpeg")}
            projectLink="https://vinavarghese.github.io/ProjectMixMe/"
            />
            <Project title="Mini Pokemon Card Game!"
            about="This is a simple Pokemon card mini game built in React that has some fun parts to it. I have used CSS Animate and CSS hover and have borrowed the pictures from the pokemon API. The game is very simple, just click the 'Battle!' button and the two hands are randomly assigned pokemon. The two hands total EXP is calculated and the winner is shown on the screen. The app is mobile responsive as well."
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/pokemon-react"
            alt="Pokemon Game Image"
            pic={require("../../Assets/Pokemon.jpeg")}
            projectLink="https://pkmn-mini-game.herokuapp.com/"
            />

            <Project title="Quiz app!"
            about="This is an quiz game that I developed! It will prompt you through a series of 5 questions and it has a timer that will end the game when time runs out. Once you have completed all of the questions, the remaining time will become your score. Feel free to click the picture to check it out and let me know any feedback you may have. Have fun!"
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/Quiz-homework"
            alt="Quiz app Image"
            pic={require("../../Assets/Quiz2.jpeg")}
            projectLink="https://zackdeacon.github.io/Quiz-homework"
            />
            <Project title="Weather Dashboard App!"
            about="This app uses local storage, Javascript, CSS, and 3rd party API data to allow a user to search for the weather related info of a certain city. The app will provide current conditions, a five day forecast, and the UV index. 
    
            This app calls on data from a weather API. Feel free to click the picture to check it out and let me know any feedback you may have!"
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/Weather-app-homework"
            alt="Weather App Image"
            pic={require("../../Assets/WeatherApp2.jpeg")}
            projectLink="https://zackdeacon.github.io/Weather-app-homework/"
            />
            <Project title="React employee directory!"
            about="This app is built using React and utilizes an API through Ajax. This app allows a user to search through the user directory and filter by first name and last name. Enjoy!"
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/react-employee-directory-hw"
            alt="React Directory Image"
            pic={require("../../Assets/react-employee-directory.jpeg")}
            projectLink="https://mighty-savannah-44325.herokuapp.com/"
            />
            <Project title="React Utility App!"
            about="This is built in React and it incorporates the use of state, some CSS animations, React router, and a bit of logic. This app currently has two main functions, A dice roller and a coin flipper. I plan to continue to add a few more things to make this a fun simple utility app in case you ever need it! Enjoy!"
            githubLink="Github Repo"
            github="https://github.com/zackdeacon/React-Dice-Roller"
            alt="React Dice Image"
            pic={require("../../Assets/Dice-screenshot.jpeg")}
            projectLink="https://zacks-dice-roller.herokuapp.com/"
            />

      </div> 
      </div>
        )
}
