import React, {Component} from 'react';
import "../../css/app/input.css"
import {Table, Space, Button, Input } from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'
const SCHEDULED = 'SCHEDULED'
const SUGGESTION = 'SUGGESTION'

export default class Chatinput extends Component{

    constructor(props) {
        super(props);
        this.ipt = React.createRef();
        this.state = {
            text:""
        }
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
        this.props.sendMsg(this.state.text);
        this.setState({text:""});
        this.ipt.current.focus();
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















