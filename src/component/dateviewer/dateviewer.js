import React, {Component} from 'react';
import {Table, Space, Button, Calendar, Badge} from 'antd';
import 'antd/dist/antd.css';
import './css/dateviewer.css';
import moment from 'moment';
import ajax from "../../api/ajax";
import StoreUser from "../../utils/StoreUser";
import User from "../../model/User"

const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Dateviewer extends Component {

    constructor(props) {
        super(props);
        // this.state = {listEvents: []};
        this.state = {calendarEvent: this.props.calendarEvent||[],
        listEvents:[]
        };

        // // ajax
        this.state.listEvents[8] = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
        ];
        this.state.listEvents[10] = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
        ];
        this.state.listEvents[15] = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
        ];

    }


    setDay(val) {
        // console.log("######");
        // console.log(this.state.calendarEvent);
        // console.log(this.props.calendarEvent);
        // console.log(val.month());
        // console.log(val.date());

        this.state.calendarEvent[val.month()] = this.state.calendarEvent[val.month()] || [];
        this.state.calendarEvent[val.month()][val.date()] = this.state.calendarEvent[val.month()][val.date()] || [];
        let listData = this.state.calendarEvent[val.month()][val.date()] || [];

        // console.log("######");
        // console.log(listData);

        return (
            <ul className="events">
                {(()=> {
                    console.log(val.month());
                    return listData.map(item=>{
                        return (
                            <li key={item.content}>
                                <Badge status={item.type} text={item.content}/>
                            </li>
                        );
                    });
                    // listData.map(item => ({
                    //     return(
                    // <li key={item.content}>
                    //     <Badge status={item.type} text={item.content}/>
                    // </li>
                    // );
                    // }
                })()}
            </ul>
        );
    }

    getListData(value) {
        let listData = this.state.listEvents[value.date()];
        return listData || [];
    }

    dateCellRender(value) {
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}/>
                    </li>
                ))}
            </ul>
        );
    }

    getMonthData(value) {
        if (value.month() === 11) {
            return 1394;
        }
    }

    monthCellRender(value) {
        const num = this.getMonthData(value);
        return num ? (
            <ul className="events">
                <li key="sdfsdfsdf">
                    <Badge status="error" text="sdfsdfsdf"/>
                </li>
            </ul>
        ) : null;
    }

    render() {
        return (
            <>
                <div className="dateviewer">
                    <Calendar dateCellRender={(val)=>this.setDay(val)} monthCellRender={(val)=>this.monthCellRender(val)} />
                    {/*<Calendar dateCellRender={(val) => this.setDay(val)}/>*/}
                </div>
            </>
        )
    }
}