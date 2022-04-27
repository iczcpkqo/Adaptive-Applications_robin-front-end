import React, {Component} from 'react';
import "../css/quiz.css"
import {Table, Space, Button, Radio} from 'antd';
import {EditOutlined} from '@ant-design/icons';
import moment from 'moment';
import ajax from "../../../api/ajax";
import MsgContentionScheduled from "../../chat/msg/contention/msgContentionScheduled";
import MsgContentionSuggestion from "../../chat/msg/contention/msgContentionSuggestion";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Quizradio extends Component{

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            id: this.props.id,
            tit: this.props.tit,
            selected: this.props.selected,
            options: this.props.options,
            value: ""
        };
    }

    // getOptions(options){
    //     return (
    //         options.map((item)=>{
    //             return(
    //             );
    //         })
    //     )
    // }

    onRadioChange = e => {
        console.log('radio1 checked', e.target.value);
        this.setState({
            selected: e.target.value,
        });
    };

    render() {
        return (
            <div className="quiz">
                <div className="quiz-box">
                    <div className="quiz-tit">
                        <span className="icon"> <EditOutlined /></span>
                        <span> {this.state.tit} </span>
                    </div>
                    <div className="quiz-opera">

                        <Radio.Group
                            name={this.state.id}
                            options={this.state.options}
                            onChange={this.onRadioChange}
                            value={this.state.selected}/>
                    </div>
                </div>
            </div>
        )
    }
}