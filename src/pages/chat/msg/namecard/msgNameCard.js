import React, {Component} from 'react';
import "../../css/msg-name-card.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgNameCard extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="msg-name-card">
                <div className="name-card-box">
                    <div className="nc-img">
                        <img/>
                    </div>
                </div>
            </div>
        )
    }
}















