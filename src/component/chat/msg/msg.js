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

export default class Msg extends Component{

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
                        {(()=>{
                            switch(this.state.type){
                                case SCHEDULED:
                                    return(<MsgContentionScheduled type = {this.props.type}
                                                                   booking = {this.props.booking}
                                                                   txt = {this.props.txt}
                                                                   attend = {this.props.attend} />);
                                case SUGGESTION:
                                    return(<MsgContentionSuggestion type = {this.props.type}
                                                                   booking = {this.props.booking}
                                                                   txt = {this.props.txt}
                                                                   attend = {this.props.attend} />);
                                default:
                                    break;
                            }
                        })()}
                    </div>
                </div>
            </div>
        )
    }
}















