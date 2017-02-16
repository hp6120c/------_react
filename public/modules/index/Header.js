import React from "react";
import {Link} from "react-router";
import {Modal} from "antd";
import {ajax} from "tools";
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             user:{
                username:""
            }
        }
    }
    componentWillReceiveProps(){
        ajax({
            type:"get",
            url:"/getSession",
            success:function(data){

                console.log(data)
                if (data) {
                    this.setState({
                        user:{
                            username:data.username
                        }
                    })
                }else{
                    console.log('未找到session')
                }
            }.bind(this)
        })
    }
    logout(){
         ajax({
            type:"get",
            url:"/logout",
            success:function(data){
                Modal.success({
                    title:"注销成功"
                })
                this.props.router.replace("/Login")
        }.bind(this)
        })
    }
    render(){
        var userinfo;
        if(this.state.user.username){
            console.log(this.state.user.username)
            userinfo = <span>{this.state.user.username}<a style={this.style} onClick={this.logout.bind(this)}>注销</a></span>
        }else{
            userinfo = <Link to="/login">登录</Link>
        }
        return (
               <header>
                    <h1 style={{float:"left"}}>教务管理系统</h1>
                    <ul style={{float:"right"}}>
                        <li style={{display:"inline-block"}}>{userinfo}</li>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <li style={{display:"inline-block"}}><Link to="/reg">注册</Link></li>
                    </ul>
                </header>
            )
    }
};
