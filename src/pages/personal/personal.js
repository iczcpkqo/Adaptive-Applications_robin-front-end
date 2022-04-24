/*
routing component of personal page
 */
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React,{Component} from "react";
import {Redirect,Link,Route,Switch} from 'react-router-dom'
import {message,Image,Button,Modal} from "antd";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
   ExclamationCircleOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './personal.css'
import storageUtils from "../../utils/storageUtils";
import StoreUser from "../../utils/StoreUser";
import User from "../../model/User"
import { withRouter } from 'react-router-dom';
import {formateDate} from "../../utils/dateUtils";
import Robin from "../chat/robin"
const { confirm } = Modal;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

 class Personal extends Component{
    state = {
        collapsed: false,
        currentTime:formateDate(Date.now()),
        current: 'mail',
    };
      this = this
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
     /**
      * @function：showDeleteConfirm
      * @parameter：null
      * @description： User logout operation
      */
      showDeleteConfirm =()=> {
         confirm({
             title: 'Warning notices',
             icon: <ExclamationCircleOutlined />,
             content: 'Are you really ready to log out?',
             okText: 'Yes',
             okType: 'danger',
             cancelText: 'No',
             onOk:()=> {
                 console.log('OK');
                 //Deletes user information stored locally
                 storageUtils.removeUser();
                 StoreUser.removeMe();

                 message.success("log out success!");
                 //Page jump
                 this.props.history.replace('/');
                 this.forceUpdate();

             },
             onCancel() {
                 console.log('Cancel');
             },
         });
     }

     /**
      * @function：getTime
      * @parameter：null
      * @description： Gets the current time and date
      */
     getTime=()=>{
          setInterval(()=>{
              //Format time and date
              const currentTime = formateDate(Date.now())
              this.setState({currentTime})
          },1000)
     }
     componentDidMount() {
        this.getTime();
     }

     render() {
        const{currentTime} = this.state

        const { collapsed } = this.state;
        var role = StoreUser.getMyRole();
        var tit = "";
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <>
                        <Menu.Item key="5"> <Link to ='/personal/chat/robin'>Robin</Link> </Menu.Item>
                        </>
                    </Menu>
                </Header>
                <div style={{position: "fixed", right: "50px", zIndex:"10000", top: "20px", fontSize: "18px", color: "white", fontWeight: "bolder"}}>
                    <Breadcrumb>
                        <div className="logout">
                            <span style={{ right: '80px' }}>{currentTime}</span>
                            <Button onClick={this.showDeleteConfirm} type="dashed">Log out</Button>
                        </div>
                    </Breadcrumb>
                </div>
                <br/>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div>
                        <Switch>
                            <Route path='/personal/chat/robin' component={Robin}/>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Adaptive Application Group Robin</Footer>
            </Layout>
        )
    }
}
export default withRouter(Personal);