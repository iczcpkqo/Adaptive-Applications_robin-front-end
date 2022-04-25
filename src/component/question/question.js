import React, {Component} from 'react';
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import Dialogue from "../chat/dialogue";
import Quiz from "./quiz/quiz";
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Question extends Component{

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

    getQuestions(q){
        return (
            q.map((item) => {
                return (
                    <Quiz id={item.id}
                          tit={item.tit}
                          selected={item.selected}
                          options={item.options}/>
                );
            })
        );
    }

    render() {
        return (
            <Dialogue txt="Questions">
                <div className="questions-box">
                    { this.getQuestions(this.state.questions) }
                </div>
            </Dialogue>
        )
    }
}















