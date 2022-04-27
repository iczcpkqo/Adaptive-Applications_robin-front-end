import React, {Component} from 'react';
import "../css/quiz.css"
import {Table, Space, Button, Radio} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import moment from 'moment';
import ajax from "../../../api/ajax";
import MsgContentionScheduled from "../../chat/msg/contention/msgContentionScheduled";
import MsgContentionSuggestion from "../../chat/msg/contention/msgContentionSuggestion";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class quiztwotime extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="quiz">
                <div className="quiz-box">
                    <div className="quiz-tit">
                        <span className="icon"> <EditOutlined /></span>
                        <span> {this.state.tit} </span>
                    </div>
                    <div className="quiz-opera">

                        <b>Some operation of this quiz</b>

                    </div>
                </div>
            </div>
        )
    }
}