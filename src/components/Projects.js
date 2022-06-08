import React from 'react';
import vacationawaits from "../assets/vacationawaits.png";
import dnc from "../assets/dnc-bg.jpg";
import workspace from "../assets/workspace.png";
import ecommerce from "../assets/back-end.png";
import passgen from "../assets/pass-gen.gif";
import pwa from "../assets/pwa.png";

export default function AboutMe() {

    const style1 = {
        fontFamily: "serif",
        color: "#585858",
        textShadow: "1px 1px #000000"
    }

    const linkdecor = {
        textDecoration: "none"
    }

    return (
        <div className="projectsContents">

            <h1 className="uk-text-center uk-margin-medium-top uk-margin-large-bottom"
                style={style1}>
                Featured Projects:</h1>
            <div className="uk-container uk-none">
                {/* <a href="https://github.com/Sfzmango/vacation-awaits" style={linkdecor} target="_blank"> */}
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large-bottom uk-box-shadow-hover-xlarge" uk-grid="uk-grid">
                    <div className="uk-card-media-left uk-cover-container">
                        <img src={vacationawaits} alt="vacation awaits" uk-cover="uk-cover" />
                        <canvas width="200" height="50"></canvas>
                    </div>
                    <div>
                        <div className="uk-card-body">
                            <h1>Vacation Awaits</h1>
                            <h3 className="uk-card-title">Group Project W/ Keerti Chaudhary and Callan Hunter<br />
                                May 2022
                            </h3>
                            <p>This was my second project that I have worked on. The idea of the webpage was to create a
                                randomly generated day plan for the user. This webpage utilizes Express.js to create a
                                server for our webpage. It also features the usage of MySQL and Sequelize in order to
                                create
                                and seed our user generated data. We have a middleware authentication feature for user
                                login. The page is generated with the help of handlebars.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </a> */}

                {/* <a href="https://github.com/Sfzmango/date-night-and-chill" style={linkdecor} target="_blank"> */}
                <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large-bottom uk-border-rounded uk-box-shadow-hover-xlarge"
                    uk-grid="uk-grid">
                    <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                        <img src={dnc} alt="date night and chill" uk-cover="uk-cover" />
                        <canvas width="700" height="200"></canvas>
                    </div>
                    <div>
                        <div className="uk-card-body">
                            <h1>Date Night & Chill</h1>
                            <h3 className="uk-card-title">Group Project W/ Samuel Mandel and Mohammad Razvi <br />
                                April 2022
                            </h3>
                            <p className="uk-text-muted">This was my first project that I have worked on. The idea of the
                                webpage was to create a randomly generated date night plan for the user. This webpage
                                utilizes the CSS framework Materialize, jQuery, and various third party APIs for
                                fetching
                                data. We worked with the OMDB API, Yummly API, CocktailDB API, and the Deezer API. We
                                also
                                featured the use of youtube and google queries. We predominantly used local storage in
                                order
                                to save the user data.
                            </p>
                        </div>
                    </div>
                </div>
                {/* </a> */}
            </div >

            <div className="uk-child-width-expand@s uk-text-center uk-margin-large-bottom uk-margin-small-left uk-margin-small-right" uk-grid="uk-grid">

                {/* workspace tracker card */}
                <div>
                    {/* <a href="https://github.com/Sfzmango/workspace-tracker" style={linkdecor} target="_blank"> */}
                    <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge  uk-border-rounded">
                        <div className="uk-card-media-top">
                            <img src={workspace} width="1800" height="800" alt="workspace" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Workspace Tracker
                            </h3>
                            <p className="uk-text-muted">This is a program constructed with Javascript and utilizes Node.js
                                and MySQL. It features usage of the Inquirer, MySQL2, and Console.Table packages to
                                create a nicely formatted workspace tracker.
                            </p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>

                {/* maung's shop card */}
                <div>
                    {/* <a href="https://github.com/Sfzmango/maungs-shop" style={linkdecor} target="_blank"> */}
                    <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge  uk-border-rounded">
                        <div className="uk-card-media-top">
                            <img src={ecommerce} width="100%" height="100%" alt="ecommerce" />
                        </div>                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Maung's Shop</h3>
                            <p className="uk-text-muted">This is a program constructed with Javascript and utilizes Node.js.
                                It features usage of the Express.js, MySQL2, DotEnv, and Sequelize packages to create a
                                back-end API for an pseudo-e-commerce site.
                            </p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>

            </div>

            <div className="uk-child-width-expand@s uk-text-center uk-margin-large-bottom uk-margin-small-left uk-margin-small-right" uk-grid="uk-grid">

                {/* pass-gen card */}
                <div>
                    {/* <a href="https://github.com/Sfzmango/Pass-gen" style={linkdecor} target="_blank"> */}
                    <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge  uk-border-rounded">
                        <div className="uk-card-media-top">
                            <img src={passgen} width="1800" height="1200" alt="passgen" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Pass-Gen</h3>
                            <p className="uk-text-muted">This page is constructed with HTML, CSS, and Javascript and it
                                features a Javascript program that upon pressing the "Generate Password" button, the
                                user will be asked to input a prompt for inputting the desired random password's length
                                and if they would like certain characters included or excluded.
                            </p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>

                {/* pwa card */}
                <div>
                    {/* <a href="https://github.com/Sfzmango/text-snippet" style={linkdecor} target="_blank"> */}
                    <div className="uk-card uk-card-default uk-box-shadow-hover-xlarge  uk-border-rounded">
                        <div className="uk-card-media-top">
                            <img src={pwa} width="1800" height="1200" alt="pwa" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Text Snippet</h3>
                            <p className="uk-text-muted">This app is constructed with javascript
                                features the use of progressive web apps that allows the user to type in any desired code snippet into their program. The text colors also are responsive where they change colors depending on what type of code is being written.
                            </p>
                        </div>
                    </div>
                    {/* </a> */}
                </div>
            </div>

        </div>
    );
}