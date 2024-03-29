import React, {Component} from 'react';
import User from "../../model/User"
import StoreUser from "../../utils/StoreUser";
import ChatTit from "./tit/chatTit";
import Dialogue from "./dialogue";
import Msg from "./msg/msg";
import MsgEvent from "./msg/contention/msgEvent";
import Msgtext from "./textmsg/textmsg";
import Inputpanel from "./inputpanel/inputpanel";
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class Chat extends Component{

    constructor(props) {
        super(props);
        this.msgBox = React.createRef();
        this.state = {
            msg:[],
            appsVisible: false,
            shouldScroll: true,
            dataEvent: []
        }
        // alert(this.props.ste);
        // this.getAllEvent();
    }

    async getAllEvent(){
        this.setState({dataEvent: (await ajax("/event/read_all", {}, 'GET')).data.map((item) => {
                return (<MsgEvent dataEvent={item}/>);
            }), shouldScroll: true});
        // this.state.shouldScroll = true;
    }

    sendMsg(msg){
        // this.state.msg.push(msg);
        this.state.msg.push(msg);
        this.setState({msg: this.state.msg});
        this.state.shouldScroll = true;
    }

    drawerApps(){
        this.setState({appsVisible: !this.state.appsVisible});
    }

    componentDidMount() {
        if (this.state.shouldScroll){
            this.msgBox.current.scrollTop = this.msgBox.current.scrollHeight;
            this.state.shouldScroll = false;
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        // if(prevState.msg.length !== this.state.msg.length){
        if (this.state.shouldScroll){
            this.msgBox.current.scrollTop = this.msgBox.current.scrollHeight;
            this.state.shouldScroll = false;
        }
    }

    render() {
        return (
            <Dialogue visible="true" appsVisible={this.state.appsVisible? "true":""} txt="Chat" >
            {/*<Dialogue visible="true" txt="Chat" >*/}
                <div ref={this.msgBox} className="messages">
                    {/*<Msg type="SCHEDULED"*/}
                    {/*     time="1/4/2022 12:30"*/}
                    {/*     booking="Saturday, 2/4/2022 at 11:30AM"*/}
                    {/*     txt="Intelligent personal assistant scheduled meeting for you."*/}
                    {/*     attend="Xiang Mao, Yan Zhu, Yu Xin"/>*/}

                    {/*<Msg type="SUGGESTION"*/}
                    {/*     time="1/4/2022 12:30"*/}
                    {/*     booking="Saturday, 2/4/2022 at 11:30AM"*/}
                    {/*     txt="Intelligent personal assistant suggestion meeting for you."*/}
                    {/*     attend="Xiang Mao, Yan Zhu, Yu Xin"/>*/}

                    {/*<MsgEvent dataEvent={this.state.dataEvent}/>*/}

                    {/*{this.state.dataEvent.map(e => e)}*/}
                    {this.state.msg.map(e => e)}

                </div>
                <div id="input-con">
                    <Inputpanel sendMsg={e=>this.sendMsg(e)} appsVisible={()=>this.drawerApps()} refreshCalendar={e=>this.props.refreshCalendar(e)}/>
                </div>
            </Dialogue>
        )
    }
}















