import React, {Component} from 'react';
import "../css/chat-tit.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class ChatTit extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chat-tit">
                <div className="tit">
                    <div className="tit-img">
                        <img/>
                    </div>
                    <div className="tit-txt">
                        <span>Robin</span>
                    </div>
                </div>
            </div>
        )
    }
}















