import React, {Component} from 'react';
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

export default class Dialogue extends Component{

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible || false ,
            appsVisible: this.props.appsVisible || false
        }
    }

    toggleDialogue(){
        this.setState({visible: !this.state.visible});
    }
    // drawerApps(){
    //     this.setState({appsVisible: !this.state.appsVisible});
    // }

    render() {
        return (
            <div className="chat">
                <div className={this.state.visible? "chat-box": "chat-box clicked"}>
                    <ChatTit txt={this.props.txt} onClick={()=>this.toggleDialogue()}/>
                    <div className={this.props.appsVisible ? "chat-body open-app": "chat-body"}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}















