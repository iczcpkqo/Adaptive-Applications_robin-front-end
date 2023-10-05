import React, {Component} from 'react';
import "../../css/msg.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
import MsgTitle from "../title/msgTitle";
import MsgTxt from "../txt/msgTxt";
import MsgOperaScheduled from "../opera/msgOperaScheduled";
import MsgOperaSuggestion from "../opera/msgOperaSuggestion";
import MsgFrame from "../../msg/msgFrame";

const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgEvent extends Component {

    constructor(props) {
        super(props);
        this.state = { dataEvent: this.props.dataEvent }


    }

    render() {
        return (
            <MsgFrame time="16:00">
                <div className="msg-contention event">
                    <div className="msg-con-tit">
                        <div className="msg-title">
                            <div className="msg-img-box">
                                <div className="nc-img">
                                    <img/>
                                </div>
                            </div>
                            <div className="tit-box">
                                <div className="txt">
                                    <span className="type">{this.state.dataEvent.Category}{this.state.dataEvent.Period? ` ( ${this.state.dataEvent.Period} ) ` : ""}</span>
                                    <br/>
                                    <span>From</span> <span className="time">{this.state.dataEvent.Start}</span>
                                    <br/>
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To </span> <span className="time">{this.state.dataEvent.End}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="msg-con-txt">
                        <div className="evn-tit-box">
                            <span>
                                {this.state.dataEvent.Title}
                            </span>
                        </div>

                        <div className="evn-location-box">
                            <span>
                                {this.state.dataEvent.Location}
                            </span>
                        </div>
                        <div className="attend-box">
                            <span>
                                Attendees:
                                {(()=>{
                                    return (
                                        this.state.dataEvent.Attendees.map((item)=>{
                                            return (
                                                <a className="mailto"  href={`mailto: ${item.Email}`}>
                                                    {item.DisplayName}
                                                </a>
                                            );
                                        })
                                );
                                })()}
                            </span>
                        </div>
                    </div>
                </div>
            </MsgFrame>
        )
    }
}















