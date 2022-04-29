import React, {Component} from 'react';
import "../../css/app/booking.css"
import {DatePicker, Space, Button, Input, Radio, Select} from 'antd';
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
const { Option } = Select;
const children = [];

export default class Booking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            using: false,
            title: "",
            location: "",
            category: "Team Meeting",
            period: "Semester",
            start: "",
            end: "",
            attendees: ""
        };
    }

    sendMsg(msg) {
        this.props.sendMsg("test-ttsetse");
    }

    onToggleApp() {
        this.setState({using: !this.state.using});
        this.emptyAll();
    }

    onTitleChanged(e){
        this.setState({title: e.target.value});
    }

    onLocationChanged(e){
        this.setState({location: e.target.value});
    }

    onPeriodChanged(e){
        this.setState({period: e.target.value});
    }

    onCategoryChanged(e){
        this.setState({category: e.target.value});
    }

    onTimeChanged(time){
        this.setState({start:time[0].format("YYYY-MM-DD HH:mm")});
        this.setState({end:time[1].format("YYYY-MM-DD HH:mm")});
    }

    onAttendChanged(e){
        this.setState({
            attendees:e.map((item)=>{
                return {
                    "DisplayName": item.split(",")[0],
                    "Email": item.split(",")[1] || ""
                }
            })
        })
    }

    onYesClick(){
        // https://robin-server-api.herokuapp.com/event/create
        this.onToggleApp();
        let repo = this.createMeeting();
        this.emptyAll();
        console.log(repo);
    }

    async createMeeting(meeting){

        console.log(this.state);
        return (await ajax("/event/create", {
            Title: this.state.title,
            Location: this.state.location,
            Category: this.state.category,
            Period: this.state.period,
            Start: this.state.start,
            End: this.state.end,
            Attendees: this.state.attendees
        }, 'POST').then(e=>{
            this.props.refreshCalendar();
        }));
    }


    onNoClick(){
        this.onToggleApp();
        this.emptyAll();
    }

    emptyAll(){
        this.setState( {
            title: "",
            location: "",
            category: "Team Meeting",
            period: "Semester",
            start: "",
            end: "",
            attendees: ""
        });
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

                        {/*"Title": "ASE GROUP MEETING", #REQUIRED*/}
                        <div className="input-txt">
                            <label>
                                Title:
                            </label>
                            <span className="feature-ctl">
                                <Input value={this.state.title} placeholder="Input any you want." onChange={e=>this.onTitleChanged(e)}/>
                            </span>
                        </div>

                        {/*"Location": "SLS LAB",*/}
                        <div className="input-txt">
                            <label>
                                Location:
                            </label>
                            <span className="feature-ctl">
                                <Input value={this.state.location} placeholder="Input any you want." onChange={e=>this.onLocationChanged(e)}/>
                            </span>
                        </div>


                        {/*# Can be either 'Team Meeting' or 'Lecture'*/}
                        {/*"Category": "Team Meeting", #REQUIRED*/}
                        <div className="select-radio">
                            <label>
                                Category:
                            </label>
                            <span className="feature-ctl">
                                <Radio.Group value={this.state.category} onChange={e=>this.onCategoryChanged(e)} >
                                    <Radio.Button value="Team Meeting">Team Meeting</Radio.Button>
                                    <Radio.Button value="Lecture">Lecture</Radio.Button>
                                </Radio.Group>
                            </span>
                        </div>

                            {/*# Can be either 'Semester' or 'Break'*/}
                            {/*"Period": "Semester", #REQUIRED*/}
                        <div className="select-radio">
                            <label>
                                Period:
                            </label>
                            <span className="feature-ctl">
                                <Radio.Group value={this.state.period} onChange={e=>this.onPeriodChanged(e)} >
                                    <Radio.Button value="Semester">Semester</Radio.Button>
                                    <Radio.Button value="Break">Break</Radio.Button>
                                </Radio.Group>
                            </span>
                        </div>

                        {/*# DateTime format to be exactly like this*/}
                        {/*"Start": "2022-01-24T12:00:00", #REQUIRED*/}
                        {/*"End": "2022-01-24T13:00:00",   #REQUIRED*/}
                        <div className="time-picker">
                            <label>
                                Time:
                            </label>
                            <span className="feature-ctl">
                                <RangePicker onChange={e=>this.onTimeChanged(e)} showTime/>
                            </span>
                        </div>

                            {/*# Can be empty ([]) as well*/}
                            {/*"Attendees": [*/}
                            {/*  {*/}
                            {/*      "DisplayName": "Aryan",*/}
                            {/*      "Email": "aryan@tcd.ie"*/}
                            {/*  },*/}
                            {/*  {*/}
                            {/*      "DisplayName": "Sophie",*/}
                            {/*      "Email": "sophie@tcd.ie"*/}
                            {/*  }*/}
                            {/*]*/}


                        <div className="tags-picker">
                            <label>
                                Attendees:
                            </label>
                            <span className="feature-ctl">
                                <Select mode="tags" style={{ width: '100%' }} placeholder="Pick Attendees" onChange={e=>this.onAttendChanged(e)}>
                                    <Option value="Pratik,pratik@tcd.ie">Pratik</Option>
                                    <Option value="Chaitanya,chaitanya@tcd.ie">Chaitanya</Option>
                                    <Option value="Ciara,ciara@tcd.ie">Ciara</Option>
                                    <Option value="Xiang,maoxi@tcd.ie">Xiang</Option>
                                </Select>
                            </span>
                        </div>



                        {/*<div className="time-picker">*/}
                        {/*    <label>*/}
                        {/*        time1:*/}
                        {/*    </label>*/}
                        {/*    <span>*/}
                        {/*        <RangePicker showTime/>*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                        {/*<div className="time-picker">*/}
                        {/*    <label>*/}
                        {/*        time2:*/}
                        {/*    </label>*/}
                        {/*    <span>*/}
                        {/*        <RangePicker showTime/>*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                        {/*<div className="input-txt">*/}
                        {/*    <label>*/}
                        {/*        text1:*/}
                        {/*    </label>*/}
                        {/*    <span>*/}
                        {/*        <Input placeholder="Input any you want." />*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                        <div className="confirm">
                            <div className="btn">
                                <Button type="primary" onClick={e=>this.onYesClick(e)}>Yes, I Do!</Button>
                            </div>
                            <div className="btn">
                                <Button type="primary" onClick={e=>this.onNoClick(e)} danger>No, I Wouldn't!</Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

    // "Title": "ASE GROUP MEETING",
    // "Category": "Team Meeting",
    // "Period": "Semester",
    // "Day": "Thursday",
    // "Location": "SLS LAB",
    // "End": "1.0",
    // "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
    // "Start": "13:00:00Z"
