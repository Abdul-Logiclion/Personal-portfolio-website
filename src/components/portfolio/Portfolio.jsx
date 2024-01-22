import React from "react";
import './portfolio.css'
import IMG1 from '../../portfolio/Tetris.PNG'
import IMG2 from '../../portfolio/TicTacToe.PNG'
import IMG3 from '../../portfolio/DisneyHotStar.PNG'
import IMG4 from '../../portfolio/DataMining.PNG'
import IMG5 from '../../portfolio/Snake.PNG'
import IMG6 from '../../portfolio/BankManagementSystem.PNG'


const data = [
]


const Portfolio = () =>{
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(<article key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                        <a href={github} className="btn" target="_blank">Github</a>
                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                        </div>
                    </article>
                    )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio