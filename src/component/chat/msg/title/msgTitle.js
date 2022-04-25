import React, {Component} from 'react';
import "../../css/msg.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class MsgTitle extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            time: this.props.time,
            booking: this.props.booking
        }

        switch(this.state.type){
            case SCHEDULED:
                this.state.action = SCHEDULED;
                break;
            case SUGGESTION:
                this.state.action = SUGGESTION;
                break;
            default:
                this.state.action = "DO";
                break;
        }
    }

    render() {
        return (
            <div className="msg-title">
                <div className="msg-img-box">
                    <div className="nc-img">
                        <img/>
                    </div>
                </div>
                <div className="tit-box">
                    <div className="txt">
                        <span className="type">{this.state.action}</span>
                        <span className="prep">for</span>
                        <span className="time">{this.state.booking}</span>
                    </div>
                </div>
            </div>
        )
    }
}















