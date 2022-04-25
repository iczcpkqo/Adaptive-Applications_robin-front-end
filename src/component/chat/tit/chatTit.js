import React, {Component} from 'react';
import "../css/chat.css"
import {Table, Space, Button} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
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
        this.state = { txt: this.props.txt || "Robin" }
    }

    render() {
        return (
            <div className="chat-tit">
                <div className="tit" onClick={this.props.onClick}>
                    <div className="tit-img">
                        <img/>
                    </div>
                    <div className="tit-txt">
                        <span>{this.state.txt}</span>
                    </div>
                    <div className="up">
                        <UpOutlined/>
                    </div>
                    <div className="down">
                        <DownOutlined />
                    </div>
                </div>
            </div>
        )
    }
}















