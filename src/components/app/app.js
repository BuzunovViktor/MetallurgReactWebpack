import React, { Component } from 'react'

import Greeting from '../greeting/greeting'
import StageFirst from '../stage-first/stage-first'
import StageSecond from '../stage-second/stage-second'
import StageThird from '../stage-third/stage-third'
import LastPage from '../last-page/last-page'

import './app.css'

export default class App extends Component {

    state = {
        page: 'greeting',
        count_correct: 0
    }

    onClickPage = (page) => {
        this.setState({
            page
        })
    }

    updataCountCorrect = async(count) => {
        await this.setState(({count_correct}) => {
            const new_count_correct = count_correct + count  
            return {
                count_correct: new_count_correct
            }
        })
        console.log(this.state.count_correct)
    }

    render() {
        const { page, count_correct} = this.state

        const greeting = page === 'greeting' ? <Greeting onClickPage={this.onClickPage} /> : null        
        const stage_first = page === 'stage_first' ? <StageFirst onClickPage={this.onClickPage} updataCountCorrect={this.updataCountCorrect} /> : null
        const stage_second = page === 'stage_second' ? <StageSecond onClickPage={this.onClickPage} updataCountCorrect={this.updataCountCorrect} /> : null
        const stage_third = page === 'stage_third' ? <StageThird onClickPage={this.onClickPage} /> : null
        const last_page = page === 'last_page' ? <LastPage count_correct={count_correct}/> : null 
        
   

        return (
            <div className="app">
                {greeting}
                {stage_first}
                {stage_second}
                {stage_third}
                {last_page}
            </div>
        )
    }
}