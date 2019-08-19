import React, { Component } from 'react'

import './stage-third.css'

import img_1 from '../../images/stage-third/3-news.png'
import img_2 from '../../images/stage-third/acsolit.png'
import img_3 from '../../images/stage-third/labora.png'
import img_4 from '../../images/stage-third/Macroetching.png'
import img_5 from '../../images/stage-third/s1200.png'
import img_6 from '../../images/stage-third/Manganese.png'
import card_back from '../../images/stage-third/card_back.png'
import card_back_hover from '../../images/stage-third/card_back_hover.png'

export default class StageThird extends Component {

    img_1 = img_1
    img_2 = img_2
    img_3 = img_3
    img_4 = img_4
    img_5 = img_5
    img_6 = img_6
    card_back = card_back
    card_back_hover = card_back_hover

    state = {
        data: [],
        type_one: '',
        idx_one: -1,
        type_two: '',
        idx_two: -1,
        count: 0,
        img_hover: false
    }

    componentWillMount() {
        this.randomCards()
        this.setState({
            data: this.random_cards
        })
    }

    cards = [
        { type: 'one', id: 1, img: this.img_1, active: false, click: true, hover: false },
        { type: 'two', id: 2, img: this.img_2, active: false, click: true, hover: false },
        { type: 'three', id: 3, img: this.img_3, active: false, click: true, hover: false },
        { type: 'four', id: 4, img: this.img_4, active: false, click: true, hover: false },
        { type: 'five', id: 5, img: this.img_5, active: false, click: true, hover: false },
        { type: 'six', id: 6, img: this.img_6, active: false, click: true, hover: false },
        { type: 'one', id: 7, img: this.img_1, active: false, click: true, hover: false },
        { type: 'two', id: 8, img: this.img_2, active: false, click: true, hover: false },
        { type: 'three', id: 9, img: this.img_3, active: false, click: true, hover: false },
        { type: 'four', id: 10, img: this.img_4, active: false, click: true, hover: false },
        { type: 'five', id: 11, img: this.img_5, active: false, click: true, hover: false },
        { type: 'six', id: 12, img: this.img_6, active: false, click: true, hover: false }
    ]

    random_cards = []

    randomCards = () => {
        for(let i = 0; i < 12; i++) {
            const idx = Math.floor(Math.random() * this.cards.length)
            this.random_cards.push(this.cards[idx])
            this.cards.splice(idx, 1)
        }
    }

    onClickCard = (id) => {
        const idx = this.state.data.findIndex((card) => card.id === id)
        if(this.state.data[idx].click) {
            if(this.state.type_one === '') {
                this.setState(({data, type_one, idx_one}) => {
                    const new_type_one = data[idx].type
                    const new_card = { ...data[idx], active: true, click: false }
                    const new_data = [ ...data]
                    new_data.splice(idx, 1, new_card)
                    return {
                        idx_one: idx,
                        type_one: new_type_one,
                        data: new_data
                    }
                })
            } else if(this.state.type_one !== '' && this.state.type_two === '') {
                this.setState(({data, type_two, idx_two}) => {
                    const idx = data.findIndex((card) => card.id === id)
                    const new_type_two = data[idx].type
                    const new_card = { ...data[idx], active: true, click: false }
                    const new_data = [ ...data]
                    new_data.splice(idx, 1, new_card)
                    return {
                        type_two: new_type_two,
                        idx_two: idx,
                        data: new_data
                    }
                })
                setTimeout(() => {
                    if(this.state.type_one === this.state.type_two) {
                        this.setState(({type_one, idx_one, type_two, idx_two, count}) => {
                            const new_count = count + 1
                            return {
                                type_one: '',
                                idx_one: -1,
                                type_two: '',
                                idx_two: -1,
                                count: new_count
                            }
                        })
                    } else {
                        this.setState(({data, type_one, idx_one, type_two, idx_two}) => {
                            const new_card_one = { ...data[idx_one], active: false, click: true }
                            const new_card_two = { ...data[idx_two], active: false, click: true }
                            const new_data = [...data]
                            new_data.splice(idx_one, 1, new_card_one)
                            new_data.splice(idx_two, 1, new_card_two)
                            return {
                                type_one: '',
                                idx_one: -1,
                                type_two: '',
                                idx_two: -1,
                                data: new_data
                            }
                        })
                    }
                }, 1000)
            }
        }
        
        
    }

    onMouseOver = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex((card) => card.id === id)
            const new_card = { ...data[idx], hover: true }
            const new_data = [...data]
            new_data.splice(idx, 1, new_card)

            return {
                data: new_data
            }
        })      
    }

    onMouseOut = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex((card) => card.id === id)
            const new_card = { ...data[idx], hover: false }
            const new_data = [...data]
            new_data.splice(idx, 1, new_card)

            return {
                data: new_data
            }
        })      
    }

    onClickNext = () => {
        if(this.state.count === 6) {
            this.props.onClickPage('last_page')
        }
    }

    render() {

        const { data } = this.state

        const cards = data.map((card) => {
            let className_card = 'card'
            let img = this.card_back
                if(card.hover) {
                    img = this.card_back_hover                    
                }

            if(card.active) {
                className_card += ' active'
            }
            
            return (
                <div className={className_card}
                    key={card.id}
                    onClick={() => this.onClickCard(card.id)}
                    onMouseOver={() => this.onMouseOver(card.id)}
                    onMouseOut={() => this.onMouseOut(card.id)}>
                    <img src={card.img} className="front" alt="" />
                    <img src={img} className="back " alt="" />
                </div>                
            )

        })
        
        let className_button = 'button'
        if(this.state.count === 6) {
            className_button += ' active'
        }

        return (
            <div className="stage-third">
                <h1>Третий тур</h1>

                <h2 className="task">Найдите одинаковые карточки</h2>

                <p>
                    Металловед всегда очень внимателен и сосредоточен!
                    Найдите две одинаковые картинки, переворачивая карточки по одной.
                </p>

                <div className="card-list">
                    { cards }
                </div>

                <div className={className_button}
                    onClick={this.onClickNext}>
                    <button>Узнать результат</button>
                </div>
            </div>
        )
    }
}