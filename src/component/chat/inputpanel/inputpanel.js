import React, {Component} from 'react';
import "../css/panel.css"
import {Table, Space, Button, Input } from 'antd';
import {PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import ajax from "../../../api/ajax";
import Chatinput from "./chatinput/chatinput";
import Booking from "./booking/booking";
import InitQuiz from "./initquiz/initquiz";
import Updatequiz from "./updatequiz/updatequiz";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class Inputpanel extends Component{

    constructor(props) {
        super(props);
        this.state = {
            appsVisible: this.props.appsVisible
        }
    }

    render() {
        return (
            <div className="chat-panel">
                <div className="panel-box">
                    <div className="panel-text">
                        <div className="p-t-input">
                            <Chatinput sendMsg={e=>this.props.sendMsg(e)}/>
                        </div>
                        <div className="p-t-app" onClick={()=>this.props.appsVisible()}>
                            <PlusCircleOutlined className="plus"/>
                            <MinusCircleOutlined className="minus"/>
                        </div>
                    </div>
                    <div className="panel-app">
                        <div className="app">
                            <Booking refreshCalendar={e=>this.props.refreshCalendar(e)}/>
                        </div>
                        <div className="app">
                            <InitQuiz/>
                        </div>
                        <div className="app">
                            <Updatequiz/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}















