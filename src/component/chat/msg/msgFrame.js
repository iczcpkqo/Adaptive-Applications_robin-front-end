import React, {Component} from 'react';
import "../css/msg.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../api/ajax";
import MsgContentionSuggestion from "./contention/msgContentionSuggestion";
import MsgContentionScheduled from "./contention/msgContentionScheduled";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class MsgFrame extends Component{

    constructor(props) {
        super(props);
        this.state = {type: this.props.type};
    }

    render() {
        return (
            <div className="msg">
                <div className="msg-time">
                    <p>- {this.props.time} -</p>
                </div>
                <div className="msg-box">
                    <div className="msg-con">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}















