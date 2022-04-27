import React, {Component} from 'react';
import "../../css/app/booking.css"
import {DatePicker, Space, Button, Input} from 'antd';
import {MailOutlined, CloseOutlined} from '@ant-design/icons';
import moment from 'moment';
import ajax from "../../../../api/ajax";

const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'
const {RangePicker} = DatePicker;

export default class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {using: false};
    }

    sendMsg(msg) {
        this.props.sendMsg("test-ttsetse");
    }

    onToggleApp() {
        this.setState({using: !this.state.using});
    }

    render() {
        return (
            <div className={this.state.using ? "booking sel-app" : "booking"}>
                <div className="pic" onClick={() => this.onToggleApp()}>
                    <MailOutlined/>
                </div>
                <div className="name">
                    <label>Booking</label>
                </div>
                <div className="feature">
                    <div className="close-app" onClick={() => this.onToggleApp()}>
                        <CloseOutlined/>
                    </div>

                    <div className="feature-box">
                        <div className="time-picker">
                            <label>
                                time1:
                            </label>
                            <span>
                                <RangePicker showTime/>
                            </span>
                        </div>
                        <div className="time-picker">
                            <label>
                                time2:
                            </label>
                            <span>
                                <RangePicker showTime/>
                            </span>
                        </div>
                        <div className="input-txt">
                            <label>
                                text1:
                            </label>
                            <span>
                                <Input placeholder="Input any you want." />
                            </span>
                        </div>
                        <div className="confirm">
                            <div className="btn">
                                <Button type="primary">Yes, I Do!</Button>
                            </div>
                            <div className="btn">
                                <Button type="primary" danger>No, I Wouldn't!</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}















