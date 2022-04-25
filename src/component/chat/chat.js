import React, {Component} from 'react';
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import ChatTit from "./tit/chatTit";
import Dialogue from "./dialogue";
import Msg from "./msg/msg";
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Chat extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialogue visible="true" txt="Chat">
                <Msg type="SCHEDULED"
                     time="1/4/2022 12:30"
                     booking="Saturday, 2/4/2022 at 11:30AM"
                     txt="Intelligent personal assistant scheduled meeting for you."
                     attend="Xiang Mao, Yan Zhu, Yu Xin"/>

                <Msg type="SUGGESTION"
                     time="1/4/2022 12:30"
                     booking="Saturday, 2/4/2022 at 11:30AM"
                     txt="Intelligent personal assistant suggestion meeting for you."
                     attend="Xiang Mao, Yan Zhu, Yu Xin"/>
            </Dialogue>
        )
    }
}















