import React from "react";
import {ajax} from "tools";
import {Layout,Col,Row,Form,Icon,Input,Button,Modal} from "antd";
const FormItem = Form.Item;
class Login extends React.Component{
    constructor(props){
        super(props);
    }
    login(){
        
        this.props.form.validateFields((err,values)=>{
            values.findType = "exact";
            values.addSession = 1;
            ajax({
            type:"post",
            url:"users/find",
            data:values,
            success:function(data){
             console.log('访问成功');
             console.log(values)
             if (data[0]&&data.length>0) {
                Modal.success({
                    title:'OK',
                    content:'登录成功'
                })
                this.props.router.replace('/student');
             }else {
                 Modal.error({
                    title:'error',
                    content:'登录失败'
                })
             }
            }.bind(this)
        })
        })
      
    }
    render(){
        const  {getFieldDecorator} = this.props.form;
        return (
            <Row>
             <Form className="login-form"  style={{maxWidth:360,height:330,margin:"40px auto 0 auto",backgroundColor:"white",padding:35,borderRadius:5}}>
                 <h2 style={{textAlign:"center",marginBottom:20}}>登录</h2>
                <FormItem>
                    {getFieldDecorator('username')(
                    <Input addonBefore={<Icon type="user" />} placeholder="请输入用户名"></Input>
                    )
                    }
                </FormItem>
                <FormItem>
                    {getFieldDecorator('pwd')(
                    <Input addonBefore={<Icon type="lock" />} type="password" placeholder="请输入密码"></Input>
                    )
                    }
                </FormItem>
                <FormItem>
                    
                    <label><Input type="checkbox"></Input>记住我</label>
                    <a href="#" style={{float:"right"}}>忘记密码</a>
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{width:"100%"}} onClick={this.login.bind(this)}>提交</Button>
                    <a href="#/reg">注册</a>
                </FormItem>
            </Form>
            </Row>
           
            ) 
      
            
    }
}

export default Form.create()(Login)