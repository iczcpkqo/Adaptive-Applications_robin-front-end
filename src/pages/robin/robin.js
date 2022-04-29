import React, {Component} from 'react';
import {Table, Space, Button} from 'antd';
import "./robin.css"
import ajax from "../../api/ajax";
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import Chat from "../../component/chat/chat"
import Dateviewer from "../../component/dateviewer/dateviewer"
import Question from "../../component/question/question";
import MsgEvent from "../../component/chat/msg/contention/msgEvent";
import moment from "moment";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Robin extends Component{

    constructor(props) {
        super(props);
        this.getMy();
        this.state = {
            calendarEvent:"",
            calVisible: false
        }
        this.onLoadCalendarEvent();
    }

    refreshCalendar(){
        this.setState({ calVisible: false });
        this.onLoadCalendarEvent();
    }

    async onLoadCalendarEvent(){
        let data = [[[]]];

        // moment(this.state.dataEvent.Start, "HH:mm:ss")
        // this.state.dataEvent.End = moment(this.state.dataEvent.Start, "HH:mm:ss").add(this.state.dataEvent.End, "h").format("YYYY-MM-DD HH:mm");
        // this.state.dataEvent.Start = moment(this.state.dataEvent.Start, "HH:mm:ss").format("YYYY-MM-DD HH:mm");
        // 2022-04-28T09:29:00+01:00
        // console.log(item);
        // Category
        // Team Meeting
        // Lecture

        //
        // ',


        let de = (await ajax("/event/read_all", {}, 'GET')).data.map(item=>{
            let d = moment(item.Start, "YYYY-MM-DD HH:mm:ss");
            data[d.month()] = data[d.month()] || [];
            data[d.month()][d.date()] = data[d.month()][d.date()] || [];
            data[d.month()][d.date()].push({
               type: "Lecture" === item.Category ? "success" : "error",
               content: item.Title
           });
        });

        if (de){
            this.setState({calendarEvent: data, calVisible: true})

            console.log("after: -=--=====");
            console.log(data);
        }


        // console.log("===========");
        // console.log(this.state.calendarEvent);

        // console.log(moment(item.Start, "YYYY-MM-DD HH:mm:ss").date());
        // console.log(moment(item.Start, "YYYY-MM-DD HH:mm:ss").format("M-D"));
        // this.setState({dataEvent: (await ajax("/event/read_all", {}, 'GET')).data.map((item) => {
        //         return (<MsgEvent dataEvent={item}/>);
        //     });
    }

    async getMy(){
        this.setState({data: (await ajax("/", {userId: StoreUser.getMyId()}, 'POST')).data.map((o)=>{
                let d = {};
                d.key = o.key;
                d.id = o.id;
                d.name = o.name;
                d.email = o.email;
                return d;
            })});
    }

    getCalData(){
        return this.state.calendarEvent;
    }


    render() {
        return (
            <div id="robin">
                <div id="chat">
                    <Chat onLoadDataEvent={e=>this.onLoadCalendarEvent(e)} refreshCalendar={e=>this.refreshCalendar(e)}/>
                </div>
                {/*<div id="question">*/}
                {/*    /!*<Question/>*!/*/}
                {/*</div>*/}
                <div id="calendar">
                    {(()=>{
                        if(this.state.calVisible){
                            console.log("Show Calendar:");
                            return (<Dateviewer calendarEvent={this.state.calendarEvent} getCalData={e=>this.getCalData(e)}/>);
                        }else{
                            console.log("Data is not ready, So no Calendar");
                            return "";
                        }
                    })()}


                </div>

            </div>
        )
    }
}















