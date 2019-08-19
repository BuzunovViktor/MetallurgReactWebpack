import React, { Component } from 'react'

import './last-page.css'

import privacy_policy from '../../privacy_policy.pdf'

import checkbox_img from '../../images/checkbox.svg'

export default class LastPage extends Component {
    state = {
        count_correct: this.props.count_correct,
        value_one: '',
        value_two: '',
        value_three: '',
        consent: false
    }

    onClickCheckbox = () => {
        this.setState(({consent}) => {
            return {
                consent: !consent
            }
        })
    }

    onChangeOne = (e) => {
        this.setState({
            value_one: e.target.value
        })
    }
    onChangeTwo = (e) => {
        this.setState({
            value_two: e.target.value
        })
    }
    onChangeThree = (e) => {
        this.setState({
            value_three: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.consent) {
            return
        } else {
            this.setState({
                value_one: '',
                value_two: '',
                value_three: ''
            })
        }
    }
    
    render() {
        const { count_correct, value_one, value_two, value_three, consent } = this.state

        let points = Math.floor(100 / 15 * count_correct)

        const badly = count_correct < 6 ? <div className="title_h3"> <h3>Ваш результат составляет <span>{points} баллов.</span><br />Кажется сегодня не Ваш день. Но в честь дня металлурга, вы заслужили подарок.</h3> </div> : null
        const average = count_correct >= 6 && count_correct < 9 ? <div className="title_h3"> <h3>Ваш результат составляет <span>{points} баллов.</span><br />Это хороший результат! Но есть потенциал для роста. Наш подарок послужит стимулом. </h3> </div> : null
        const fine = count_correct >= 9 && count_correct <= 15 ? <div className="title_h3"> <h3>Ваш результат составляет <span>{points} баллов.</span><br />Блестящий результат! Вы поистине отличный металловед и заслужили подарок.</h3> </div> : null
        
        const checkbox = consent ? <img src={checkbox_img} alt="" /> : null

        return (
            <div className="last-page">

                <h2>Поздравляем</h2>
                <h3 className="subtitle">Вы прошли тест</h3>

                <div className="title_h1">
                    <h1 className="title_h1__one">“Супер Металловед”</h1>
                    <h1 className="title_h1__two">“Супер Металловед”</h1>                
                </div>
                
                <form onSubmit={this.onSubmit}>
                    <div className="content">
                        {badly}
                        {average}
                        {fine} 
                        <div className="button active">
                            <div className="parent_button">
                                <button type="submit">Отправить</button>                    
                            </div>
                        </div>
                    </div>
                    
                    <div className="form">                    
                        <div className="text">
                            <p>
                                Оставьте свои контактные данные и наш менеджер расскажет как получить подарок
                            </p>
                        </div>
                        <input type="text" placeholder="Ф.И.О." value={value_one} onChange={this.onChangeOne} name="fio" />
                        <input type="text" placeholder="Компания" value={value_two} onChange={this.onChangeTwo} name="company" />
                        <input type="text" placeholder="Телефон" value={value_three} onChange={this.onChangeThree} name="phone" />

                        <div className="consent">
                            <div className="checkbox"
                                onClick={this.onClickCheckbox}>
                                {checkbox}
                            </div>
                            <a href={privacy_policy} target="_blank" rel="licensenpm run">Я согласен с политикой конфиденциальности компании "АКСАЛИТ"</a>                        
                        </div>
                    </div>
                </form>

                <div className="text-two">
                    <p>
                        Примите участие в ежегодной уральской премии <a href="http://xn--80aafeebcc6cah2ae1c.xn--p1ai/" target="_blank">"МЕТАЛОВЕД ГОДА 2019"</a>
                    </p>                    
                </div>

            </div>
        )
    }
    
}