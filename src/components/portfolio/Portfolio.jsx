import React from "react";
import './portfolio.css'
import IMG1 from '../../portfolio/Tetris.PNG'
import IMG2 from '../../portfolio/TicTacToe.PNG'
import IMG3 from '../../portfolio/DisneyHotStar.PNG'
import IMG4 from '../../portfolio/DataMining.PNG'
import IMG5 from '../../portfolio/Snake.PNG'
import IMG6 from '../../portfolio/BankManagementSystem.PNG'


const data = [
    {
        id:1,
        image:IMG1,
        title:'Tetris Game',
        github:'https://github.com/Pawan-Kumar03/TetrisGame',
        demo:'https://drive.google.com/file/d/1jUHY9Z7tUfIa5VhGRJy_fudHNIZBkHrX/view?usp=drive_link'
    },
    {
        id:2,
        image:IMG2,
        title:'Tic Tac Toe AI GameBot',
        github:'https://github.com/Pawan-Kumar03/Tic-Tac-Toe-game-AI-Bot',
        demo:'https://drive.google.com/file/d/1IiY6oV8RjMLMl8mISq-0eWytPGk67Mra/view?usp=drive_link'
    },
    {
        id:3,
        image:IMG3,
        title:'Disney HotStar Clone',
        github:'https://github.com/Pawan-Kumar03/Disney-HotStar-Clone',
        demo:'https://drive.google.com/file/d/1YsnJ3omANahQRWeYa-c0bt__Aadhc0VB/view?usp=drive_link'
    },
    {
        id:4,
        image:IMG4,
        title:'Web Scrapping',
        github:'https://github.com/Pawan-Kumar03/webScrapping',
        demo:'https://drive.google.com/file/d/1Zk6tbng_M8O8FMpBsZ4QimCvlJ9ssDTT/view?usp=drive_link'
    },
    {
        id:5,
        image:IMG5,
        title:'Snake Game',
        github:'https://github.com/Pawan-Kumar03/Snake-Game',
        demo:'https://drive.google.com/file/d/1sYjoLx5NMSq3D89Se62S8DHKdRWeMd0M/view?usp=drive_link'
    },
    {
        id:6,
        image:IMG6,
        title:'Bank Management System',
        github:'https://github.com/Pawan-Kumar03/BankManagementSystem',
        demo:'https://drive.google.com/file/d/1sMfHaLq3F5WoTD9O56B7vpfpgNl8WIjr/view?usp=drive_link'
    }
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