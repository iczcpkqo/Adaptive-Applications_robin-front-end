import React, {Component} from 'react';
import "../../css/app/quiz.css"
import {DatePicker, Space, Button, Input, Radio, Select, TimePicker } from 'antd';
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

export default class Updatequiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            using: false,
            UserId: 12,
            WorkingHours: {
                StartTime: "",
                EndTime: ""
            },
            WeatherPreference: ""
        };
    }

    onToggleApp() {
        this.setState({using: !this.state.using});
        this.emptyAll();
    }

    onWorkingChanged(time){
        this.setState({
            WorkingHours: {
                StartTime: time[0].format("HH:mm"),
                EndTime: time[0].format("HH:mm")
            }
        });
    }

    onWeatherChanged(e){
        this.setState({WeatherPreference: e.target.value});
    }

    onYesClick(){
        this.onToggleApp();
        let repo = this.updateQuiz();
        this.emptyAll();
        console.log(repo);
    }

    onNoClick(){
        this.onToggleApp();
        this.emptyAll();
    }

    async updateQuiz(){
        console.log(this.state);
        return (await ajax("/update-model", {
            UserId: 12,
            WorkingHours: this.state.WorkingHours,
            BreakTime: this.state.BreakTime,
            TimePreference: this.state.TimePreference,
            WeatherPreference: this.state.WeatherPreference
        }, 'POST'));

    }

    emptyAll(){
        this.setState({
            UserId: 12,
            WorkingHours: {
                StartTime: "",
                EndTime: ""
            },
            WeatherPreference: ""
        });
    }

    render() {
        return (
            <div className={this.state.using ? "init-quiz sel-app" : "init-quiz"}>
                <div className="pic" onClick={() => this.onToggleApp()}>
                    <MailOutlined/>
                </div>
                <div className="name">
                    <label>UpdateQ</label>
                </div>
                <div className="feature">
                    <div className="close-app" onClick={() => this.onToggleApp()}>
                        <CloseOutlined/>
                    </div>

                    <div className="feature-box">


                        {/*"WorkingHours": {*/}
                            {/*"StartTime": "09:30",*/}
                            {/*"EndTime": "17:30"*/}
                        <div className="time-picker">
                            <label>
                                Working Hours:
                            </label>
                            <span className="feature-ctl">
                                <TimePicker.RangePicker format="HH:mm" onChange={e=>this.onWorkingChanged(e)}/>
                            </span>
                        </div>

                        {/*"WeatherPreference": "sunny"*/}
                        <div className="select-radio">
                            <label>
                                Weather Preference:
                            </label>
                            <br/>
                            <span className="feature-ctl">
                                <Radio.Group value={this.state.WeatherPreference}
                                             onChange={e=>this.onWeatherChanged(e)}
                                >
                                    <Radio.Button value="sunny">sunny</Radio.Button>
                                    <Radio.Button value="rainy">rainy</Radio.Button>
                                    <Radio.Button value="any">any</Radio.Button>
                                </Radio.Group>

                                {/*<Select mode="multiple"*/}
                                {/*        allowClear*/}
                                {/*        style={{width: '100%'}}*/}
                                {/*        onChange={e=>this.onWeatherChanged(e)}*/}
                                {/*        placeholder="Time Preference"*/}
                                {/*>*/}
                                {/*    <Option key="sunny">sunny</Option>*/}
                                {/*    <Option key="rainy">rainy</Option>*/}
                                {/*</Select>*/}
                            </span>
                        </div>

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















