import React, {Component} from 'react';
import '../css/msg.css'
import {Tag} from 'antd';
import moment from 'moment';
import ajax from "../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class Textmsg extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type || false,
            text: this.props.text || "..."
        }

    }

    render() {
        return (
            <div className="msg-textmsg">
                <div className="msg-textmsg-box">
                    <div className="msg-send">
                        <span className="tip">
                            {this.state.text}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}















