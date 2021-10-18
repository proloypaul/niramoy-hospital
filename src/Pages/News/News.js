import React from 'react';
import newsOne from "../../images/news/news-1.png";
import newsTwo from "../../images/news/news-2.png";
import newsThree from "../../images/news/news-3.png";
import newsFour from "../../images/news/news-4.jfif";
import './New.css';

const News = () => {
    return (
        <div className="container my-5">
            <h1 className="title">Niramoy News</h1>
            <div>
                <div className="d-flex my-5 py-5 news-container">
                    <div>
                        <h1>Community Vaccination Series Session 2</h1>
                        <p>11 October 2021</p>
                        <p>
                        Niramoy Health Infectious diseases physician and immunisation expert Prof Michelle Giles will be joined by A/Prof Kate Stern, Head of Reproductive Services at The Royal Women's Hospital to share all you need to know about vaccination and fertility.
                        </p>
                        <button className="visitBtn">Find Out More</button>
                    </div>
                    <div>
                        <img src={newsOne} alt="Empty!"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex my-5 py-5 news-container">
                    <div>
                        <h3>Keeping hearts alive outside the body</h3>
                        <p>11 October 2021</p>
                        <p>
                        A ground-breaking trial taking place across Australia and New Zealand could change the future of heart transplantation, potentially enabling up to 15 per cent more heart transplants to occur each year.
                        </p>
                        <button className="visitBtn">Find Out More</button>
                    </div>
                    <div>
                        <img src={newsTwo} alt="Empty!"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex my-5 py-5 news-container">
                    <div>
                        <h3>Community Vaccination Series Session 1</h3>
                        <p>27 September 2021</p>
                        <p>
                        Here is the first in our series of community information sessions on the COVID-19 vaccines. In this session, Prof Allen Cheng and paediatrician A/Prof  Nigel Crawford explain how the COVID-19 vaccine works in children over 12 and answer questions from the community.
                        </p>
                        <button className="visitBtn">Find Out More</button>
                    </div>
                    <div>
                        <img src={newsThree} alt="Empty!"/>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex my-5 py-5 news-container">
                    <div>
                        <h3>Clinic for workers exposed to toxic dust opens</h3>
                        <p>17 September 2021</p>
                        <p>
                        Victorian workers at risk of silicosis can now access free health screening at Australia’s only dedicated public hospital occupational respiratory clinic, making care more available for people at risk of developing the deadly lung disease.
                        </p>
                        <button className="visitBtn">Find Out More</button>
                    </div>
                    <div>
                        <img src={newsFour} alt="Empty!"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;