import React, {Component} from 'react';
import "../../css/app/input.css"
import {Table, Space, Button, Input } from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
import Msgtext from "../../textmsg/textmsg";
import MsgtextLeft from "../../textmsg/textmsgLeft"
import MsgEvent from "../../msg/contention/msgEvent";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'
const SUG_HEAD = '[{"Title":';

const test_data = `[{ "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "End": "1.0",
    "Location": "SLS LAB",
    "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
    "Start": "12:00:00Z"
}, {
    "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "Location": "SLS LAB",
    "End": "1.0",
    "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
    "Start": "13:00:00Z"
}, {
    "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "End": "2.0",
    "Start": "13:00:00Z",
    "Location": "LG12 GLASS ROOMS"
}, {
    "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "End": "2.0",
    "Start": "15:00:00Z",
    "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
    "Location": "SLS LAB"
}, {
    "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "End": "1.0",
    "Start": "15:00:00Z",
    "Location": "ONLINE"
}, {
    "Title": "ASE GROUP MEETING",
    "Category": "Team Meeting",
    "Period": "Semester",
    "Day": "Thursday",
    "End": "3.0",
    "Start": "15:00:00Z",
    "Attendees": "Chaitanya Sheetal Ciara Maddie Aakash Sophie Aryan",
    "Location": "SLS LAB"
}]`;

export default class Chatinput extends Component{

    constructor(props) {
        super(props);
        this.ipt = React.createRef();
        this.state = {
            text:""
        }
    }

    isSuggestion(str){
        return str.substr(0, 10) === SUG_HEAD;
    }

    async getReMsg(txt){
        let rep = (await ajax("", {
            "queryInput": {
                "text": {
                    "text": txt,
                    "languageCode": "en"
                }
            }
        }, 'POST', "BOT"));
        // this.state.shouldScroll = true;
        // https://dialogflow.cloud.google.com/v1/integrations/messenger/webhook/4b2add1d-2437-4dfc-b333-b0184a8203f3/sessions/dfMessenger-86231231
        return rep;
    }

    onInputChanged(e){
        this.setState({text:e.target.value})
    }

    onInputKeypress(e){
        if(e.key ==="Enter"){
            this.sendMsg();
        }
    }

    sendMsg(){
        this.props.sendMsg( <Msgtext text={this.state.text}/> );
        this.setState({text:""});
        this.ipt.current.focus();

        let rep = this.getReMsg(this.state.text);
        rep.then(e=>{
            let str = JSON.parse(e.data.replace(")]}'","")).queryResult.fulfillmentMessages[0].text.text[0]

            // let str = JSON.parse(e.data.replace(")]}'","")).queryResult.fulfillmentMessages[0].text;

            // console.log(str);
            // str = test_data;

            if (this.isSuggestion(str)){
                str = str.slice(2,-2).split("}, {").map((item)=>{
                    console.log(item);
                    return  JSON.parse("{"+item+"}");
                });
                console.log(str);
                str.map(item=>{
                    console.log(item);
                    this.props.sendMsg(<MsgEvent dataEvent={{
                                            Title: item.Title,
                                            Category: item.Category,
                                            Period: item.Period,
                                            End: "1.0",
                                            Location: item.Location,
                                            Attendees: "Attendees" in item ? item.Attendees.split(" ").map(i=>{
                                               return {
                                                    "DisplayName": i,
                                                    "Email": ""
                                               }
                                            }) : "",
                                            Start: item.Start
                                          }}
                                          isSuggestion={true}/>);
                });

            } else{
                this.props.sendMsg( <MsgtextLeft text={str}/> );
            }
        });
    }

    render() {
        return (
            <div className="app-input">
                <div className="input-box">
                    <div className="input-text">
                        <Input placeholder="Input anything you want"
                               ref={this.ipt}
                               value={this.state.text}
                               onChange={e=>this.onInputChanged(e)}
                               onKeyPress={e=>this.onInputKeypress(e)}/>
                    </div>
                    <div className="input-button">
                        {/*<Button type="primary" onClick={e=>this.props.sendMsg(this.state.text)}>Send</Button>*/}
                        <Button type="primary" onClick={()=>this.sendMsg()}>Send</Button>
                    </div>
                </div>
            </div>
        )
    }
}















