import React, { Component } from 'react'

import './stage-second.css'

import img_1 from '../../images/stage-second/img_1.jpg'
import img_2 from '../../images/stage-second/img_2.jpg'
import img_3 from '../../images/stage-second/img_3.jpeg'
import img_4 from '../../images/stage-second/img_4.jpg'
import img_5 from '../../images/stage-second/img_5.jpg'
import img_6 from '../../images/stage-second/img_6.jpg'
import img_7 from '../../images/stage-second/img_7.jpg'
import img_8 from '../../images/stage-second/img_8.jpg'
import img_9 from '../../images/stage-second/img_9.jpg'
import img_10 from '../../images/stage-second/img_10.jpg'

export default class StageSecond extends Component {

    img_1 = img_1
    img_2 = img_2
    img_3 = img_3
    img_4 = img_4
    img_5 = img_5
    img_6 = img_6
    img_7 = img_7
    img_8 = img_8
    img_9 = img_9
    img_10 = img_10

    state = {
        data: {},
        count_question: 5,
        count_question_correct: 0
    }

    componentWillMount() {
        this.updataQuestion()
    }

    updataQuestion = async () => {
        const idx = Math.floor(Math.random() * this.data.length)
        await this.setState(({data, count_question}) => {
            return {
                data: this.data[idx],
                count_question: count_question - 1,
            }
        })
        this.data.splice(idx, 1)
    }

    onClickOption = (id) => {
        const idx = this.state.data.options.findIndex((el) => el.id === id)
        if(this.state.data.active) {
            this.setState(({data, count_question_correct}) => { 

                if(idx === data.answer_idx) {
                    const new_option = {...data.options[idx], status: 'default correct'}
                    const new_options = [...data.options]
                    new_options.splice(idx, 1, new_option)
                    const new_data = { ...data, active : false, options: new_options, answer_user: true, answer_user: 'correct' }

                    return {
                        count_question_correct: count_question_correct + 1,
                        data: new_data
                    }

                } else {
                    const new_option = {...data.options[idx], status: 'default not_correct'}
                    const new_correct_option = {...data.options[data.answer_idx], status: 'default correct'}

                    const new_options = [...data.options]
                    new_options.splice(idx, 1, new_option)
                    new_options.splice(data.answer_idx, 1, new_correct_option)

                    const new_data = { ...data, active : false, options: new_options, answer_user: 'not_correct'}

                    return {
                        data: new_data
                    }  
                }
            })
        }
    }

    onClickNext = () => {
        if(this.state.data.answer_user !== '') {
            if(this.state.count_question > 0) {
                this.updataQuestion()           
            } else {
                this.props.onClickPage('stage_third')
                this.props.updataCountCorrect(this.state.count_question_correct)
            } 
        }
    }

    data = [
        {
            question: 'Определите какая форма графита в чугуне представлена на фото?',
            img: this.img_1,
            options: [
                { label: 'Шаровидный графит', id: 1, status: 'default' }, 
                { label: 'Пластинчатый графит', id: 2, status: 'default' },  
                { label: 'Вермикулярный графит', id: 3, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },
        {
            question: 'Какие неметаллические включения сталей имеют продолговатую форму?',
            img: this.img_2,
            options: [
                { label: 'Силикат', id: 1, status: 'default' }, 
                { label: 'Сульфиды', id: 2, status: 'default' },  
                { label: 'Нитриды', id: 3, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },
        {
            question: 'Определите примерную величину зерна стали по фотографии.',
            img: this.img_3,
            options: [
                { label: '3 балл', id: 1, status: 'default' }, 
                { label: '7 балл', id: 2, status: 'default' },  
                { label: '10 балл', id: 3, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },
        {
            question: 'Определите металл по цвету микроструктуры.',
            img: this.img_4,
            options: [
                { label: 'Алюминий', id: 1, status: 'default' }, 
                { label: 'Чугун', id: 2, status: 'default' },  
                { label: 'Титан', id: 3, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },
        {
            question: 'Какая кристаллическая решетка указана на фотографии?',
            img: this.img_5,
            options: [
                { label: 'Кубическая объемно-центрированная ', id: 1, status: 'default' }, 
                { label: 'Гексагональная плотноупакованная', id: 2, status: 'default' },  
                { label: 'Кубическая гранецентрированная', id: 3, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },
        {
            question: 'Какой элемент указан на панораме?',
            img: this.img_6,
            options: [
                { label: 'Металлическая стёжка', id: 1, status: 'default' }, 
                { label: 'Загиб', id: 2, status: 'default' },  
                { label: 'Сварной шов', id: 3, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },
        {
            question: 'Какие фазы обычно определяют при анализе зернистости структуры титана?',
            img: this.img_7,
            options: [
                { label: 'Фаза луны и солнца', id: 1, status: 'default' }, 
                { label: 'Альфа- и бетта-фазы', id: 2, status: 'default' },  
                { label: 'Фаза колебаний частиц', id: 3, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },
        {
            question: 'Какая структура перлита в стали изображена на фотографии?',
            img: this.img_8,
            options: [
                { label: 'Пластинчатый', id: 1, status: 'default' }, 
                { label: 'Зернистый', id: 2, status: 'default' },  
                { label: 'Ничего из вышеперечисленного', id: 3, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },
        {
            question: 'Что обозначают цифры на снимке образца?',
            img: this.img_9,
            options: [
                { label: 'Количество включений', id: 1, status: 'default' }, 
                { label: 'Средний размер зерен', id: 2, status: 'default' },  
                { label: 'Масштаб', id: 3, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },
        {
            question: 'Какому процессу был подвержен металлический образец?',
            img: this.img_10,
            options: [
                { label: 'Деформации', id: 1, status: 'default' }, 
                { label: 'Коррозии', id: 2, status: 'default' },  
                { label: 'Плавлению', id: 3, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },
        
    ]

    render() {

        const { question, img, options, answer_user } = this.state.data

        let className_answer = 'answer'
        let className_button = 'button'
        if(answer_user !== '') {
            className_answer += ' active'
            className_button += ' active'
        }

        const answer_span_correct = answer_user === 'correct' ? <span className="answer_span_correct">Правильно!</span> : null
        const answer_span_not_correct = answer_user === 'not_correct' ? <span className="answer_span_not_correct"> Не совсем так.</span> : null

        const option_items = options.map((option) => {
            return (
                <div className={option.status}
                    key={option.id}>
                    <button onClick={() => this.onClickOption(option.id)}>{option.label}</button>                        
                </div>
            )
        })

        return(
            <div className="stage-second">
                <h1>Второй тур</h1>

                <h2 className="task">Определите название метала</h2>

                <p>
                    Первоклассный металловед определяет металл с закрытыми глазами!
                    Выберите правильный ответ на вопросы из области металлографии.
                </p>

                <div className="parent">
                    <div className="parent-question">
                        <h2 className="question">{question}</h2>

                        <div className="buttons">
                            {option_items}
                        </div>

                        <div className={className_answer}>
                            <p>
                                {answer_span_correct}
                                {answer_span_not_correct} <br />
                            </p>
                        </div>
                    </div>
                    
                    <div className="img">
                        <img src={img} alt="" />                
                    </div>

                </div>
                

                <div className={className_button}>
                    <button onClick={this.onClickNext}>Далее</button>
                </div>

            </div>
        )
    }
}
