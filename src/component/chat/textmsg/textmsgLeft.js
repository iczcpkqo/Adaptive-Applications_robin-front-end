import React, {Component} from 'react';
import '../css/msg.css'
import {Tag} from 'antd';
import moment from 'moment';
import ajax from "../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class TextmsgLeft extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type || false,
            text: this.props.text || "..."
        }

    }

    render() {
        return (
            <div className="msg-textmsg left">
                <div className="msg-textmsg-box">
                    <div className="msg-send">
                        <span className="tip">
                            {this.state.text}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}


// [{
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "End": "1.0",
//     "Location": "SLS LAB",
//     "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
//     "Start": "12:00:00Z"
// }, {
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "Location": "SLS LAB",
//     "End": "1.0",
//     "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
//     "Start": "13:00:00Z"
// }, {
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "End": "2.0",
//     "Start": "13:00:00Z",
//     "Location": "LG12 GLASS ROOMS"
// }, {
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "End": "2.0",
//     "Start": "15:00:00Z",
//     "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
//     "Location": "SLS LAB"
// }, {
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "End": "1.0",
//     "Start": "15:00:00Z",
//     "Location": "ONLINE"
// }, {
//     "Title": "ASE GROUP MEETING",
//     "Category": "Team Meeting",
//     "Period": "Semester",
//     "Day": "Thursday",
//     "End": "3.0",
//     "Start": "15:00:00Z",
//     "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
//     "Location": "SLS LAB"
// }]








