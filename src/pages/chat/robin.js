import React, {Component} from 'react';
import './css/chat.css'
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import ChatTit from "./tit/chatTit";
import Msg from "./msg/msg";
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../api/ajax";
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
        this.setState({data: (await ajax("/", {adoId: StoreUser.getMyId()}, 'POST')).data.map((o)=>{
                let d = {};
                d.key = o.athleteId;
                d.id = o.athleteId;
                d.name = o.athleteName;
                d.email = o.athleteEmail;
                d.country = o.location.country;
                d.region = o.location.region;
                return d;
            })});
    }

    render() {
        return (
            <div className="robin">
                <div className="chat-box">
                    <ChatTit/>
                    <Msg type="SCHEDULED"/>
                    <Msg type="SUGGESTION"/>
                </div>
            </div>
        )
    }
}















