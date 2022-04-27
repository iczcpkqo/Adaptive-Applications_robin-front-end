import React, {Component} from 'react';
import {Table, Space, Button} from 'antd';
import "./robin.css"
import ajax from "../../api/ajax";
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import Chat from "../../component/chat/chat"
import Dateviewer from "../../component/dateviewer/dateviewer"
import Question from "../../component/question/question";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Robin extends Component{

    constructor(props) {
        super(props);
        this.getMy();
    }

    async getMy(){
        this.setState({data: (await ajax("/", {userId: StoreUser.getMyId()}, 'POST')).data.map((o)=>{
                let d = {};
                d.key = o.key;
                d.id = o.id;
                d.name = o.name;
                d.email = o.email;
                return d;
            })});
    }

    render() {
        return (
            <div id="robin">
                <div id="chat">
                    <Chat/>
                </div>
                <div id="question">
                    <Question/>
                </div>
                <div id="calendar">
                    <Dateviewer />
                </div>

            </div>
        )
    }
}















