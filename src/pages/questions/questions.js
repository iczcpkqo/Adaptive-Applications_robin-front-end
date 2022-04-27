import React, {Component} from 'react';
import {Table, Space, Button} from 'antd';
import "./questions.css"
import ajax from "../../api/ajax";
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import Question from "../../component/question/question";
// import Quizgt
// TODO: 新增Quiz
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Robin extends Component{

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    id: "aaaa",
                    tit: "question 1 test1 test1 test1",
                    selected: "option2",
                    options: [
                        {
                            label: "option1",
                            value: "option1"
                        }, {
                            label: "option2",
                            value: "option2"
                        }, {
                            label: "option3",
                            value: "option3"
                        }
                    ]
                },
                {

                    id: "bbb",
                    tit: "question 2 test2 test2 test2",
                    selected: "option1",
                    options: [
                        {
                            label: "option1",
                            value: "option1"
                        }, {
                            label: "option2",
                            value: "option2"
                        }, {
                            label: "option3",
                            value: "option3"
                        }
                    ]
                },
                {
                    id: "cccc",
                    tit: "question 3 test1 test3 test3",
                    selected: "option3",
                    options: [
                        {
                            label: "option1",
                            value: "option1"
                        }, {
                            label: "option2",
                            value: "option2"
                        }, {
                            label: "option3",
                            value: "option3"
                        }
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div id="questions">
                <div className="questions-box">
                    { this.getQuestions(this.state.questions) }
                </div>
            </div>
        )
    }
}















