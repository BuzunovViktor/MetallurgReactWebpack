import React, { Component } from 'react'

import './greeting.css'

export default class Greeting extends Component {

    render() {
        
        return (
            <div className="greeting">
                    <h2>увлекательная игра</h2> 
    
                <div className="title_h1">
                    <h1 className="title_h1__one">“Супер Металловед”</h1>
                    <h1 className="title_h1__two">“Супер Металловед”</h1>                
                </div>
    
                <div className="button">
                    <button className="button__one">начать игру</button>  
                    <button className="button__two"
                        onClick={() => this.props.onClickPage('stage_first')}>начать игру</button>            
                </div>
    
                <div className="text">
                    <p>
                        Перед вами игра, состоящая из трёх туров. Вам предстоит проверить свои знания в области физики, 
                        химии и металлографии, отвечая на вопросы и пройдя карточную игру. После успешного прохождения 
                        всей игры, вы получите <span>индивидуальный подарок</span> < br />
                        Будьте внимательны! Игру можно пройти <span>один раз</span> и она будет активна в период <span>с 22 по 31 июля 2019 года</span>
                    </p>
                </div>
            </div>
        )
    }
} 