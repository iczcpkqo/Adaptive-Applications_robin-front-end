import React, {Component} from 'react';
import "../../css/msg-contention.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
import MsgTitle from "../title/msgTitle";
import MsgTxt from "../txt/msgTxt";
import MsgOperaScheduled from "../opera/msgOperaScheduled";
import MsgOperaSuggestion from "../opera/msgOperaSuggestion";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgContentionSuggestion extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="msg-contention">
                <div className="msg-con-tit">
                    <MsgTitle type="SUGGESTION" time="Saturday, 2/4/2022 at 11:30AM" booking="1/4/2022 12:30"/>
                </div>
                <div className="msg-con-txt">
                    <MsgTxt txt="Intelligent personal assistant suggestion this meeting for you."/>
                </div>
                <div className="msg-con-opera">
                    <MsgOperaSuggestion/>
                </div>
            </div>
        )
    }
}















