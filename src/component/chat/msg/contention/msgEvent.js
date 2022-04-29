import React, {Component} from 'react';
import "../../css/msg.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
import MsgTitle from "../title/msgTitle";
import MsgTxt from "../txt/msgTxt";
import MsgOperaScheduled from "../opera/msgOperaScheduled";
import MsgOperaSuggestion from "../opera/msgOperaSuggestion";
import MsgOperaBook from "../opera/msgOperaBook";
import MsgFrame from "../../msg/msgFrame";

const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataEvent: this.props.dataEvent,
            isSuggestion: this.props.isSuggestion || "",
            avaOpera: true
        }
        this.state.dataEvent.End = moment(this.state.dataEvent.Start, "HH:mm:ss").add(this.state.dataEvent.End, "h").format("YYYY-MM-DD HH:mm");
        this.state.dataEvent.Start = moment(this.state.dataEvent.Start, "HH:mm:ss").format("YYYY-MM-DD HH:mm");
    }

    showScheduleIt(o){
        return (
            o&&this.state.avaOpera ?
            <div className="msg-con-opera">
                <MsgOperaBook onSchedule={e=>this.onSchedule(e)}/>
            </div>
            : ""
        );
    }

    onSchedule(dataEvent){
        this.createMeeting();
        this.setState({avaOpera:""});
    }


    async createMeeting(meeting){
        console.log(this.state.dataEvent.End);
        console.log(this.state.dataEvent.Start);

        // let e = this.state.dataEvent.End
        // let s = this.state.dataEvent.Start
        //
        // let aa = moment(s, "HH:mm:ss");
        // let aa = moment(s);
        // let aa = moment("15:00", "hh:mm");

        // console.log(aa.add(e, "h").format("HH:mm"));;

        console.log(this.state.dataEvent);

        return (await ajax("/event/create", {
            Title: this.state.dataEvent.Title,
            Location: this.state.dataEvent.Location,
            Category: this.state.dataEvent.Category,
            Period: this.state.dataEvent.Period,
            Start: this.state.dataEvent.Start,
            End: this.state.dataEvent.End,
            Attendees: this.state.dataEvent.Attendees
        }, 'POST'));

    }

    render() {
        return (
            <MsgFrame>
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
                                        // "Attendees" in this.state.dataEvent ? this.state.dataEvent.Attendees.map((item)=>{
                                        this.state.dataEvent.Attendees !=="" ? this.state.dataEvent.Attendees.map((item)=>{
                                            return (
                                                <a className="mailto"  href={`mailto: ${item.Email}`}>
                                                    {item.DisplayName}
                                                </a>
                                            );
                                        }):""
                                );
                                })()}
                            </span>
                        </div>
                    </div>

                    {this.showScheduleIt(this.state.isSuggestion)}

                </div>
            </MsgFrame>
        )
    }
}















