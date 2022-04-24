import React, {Component} from 'react';
import "../../css/msg-contention.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgTxt extends Component{

    constructor(props) {
        super(props);
        this.state = {
            txt: this.props.txt
        }
    }

    render() {
        return (
            <div className="msg-txt">
                <span className="txt">
                    {this.state.txt}
                </span>
            </div>
        )
    }
}















