import React from "react";
import {ajax} from "tools";
import {Button,Form,Input,Icon,Modal} from "antd";
const FormItem = Form.Item;
class Reg extends React.Component{
	constructor(props){
		super(props);
	}
	checkPassword(rule,value,callback){
		const form = this.props.form;
		console.log(value);
		if (value && value!== form.getFieldValue('pwd')) {
			callback('两次密码不一致');
		}else {
			callback();
		}
	}
	reg(){
		this.props.form.validateFields((err,values)=>{
			if (!err) {
				console.log('验证成功');
				console.log(err,values);
				ajax({
					type:'post',
					url:'users/add',
					data:values,
					success:function(){
						Modal.success({
									title:'OK',
									content:"注册成功"
								})
						this.props.router.replace("/login");
					}.bind(this)
				})
			}
			console.log(err,values);
		})
		
	}
	isRepeat(rule,value,callback){
		ajax({
			type:'get',
			url:'users/find',
			data:{username:value},
			success:function(data){
				if(data.length>0){
					callback('重名')
				}else {
					callback();
				}
			}
		})
	}
	render(){
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
			labelCol:{span:6},
			// wrapperCol:{span:14}
		};
		return (
			<div>
			<Form style={{maxWidth:360,height:380,margin:"40px auto 0 auto",backgroundColor:"white",padding:35,borderRadius:5}}>
				<h2 style={{textAlign:"center",marginBottom:20}}>用户注册</h2>
				<FormItem>
					{getFieldDecorator('username',{
						rules:[{
							pattern:/^\w{3,}$/,message:'请输入3位及以上字符'
						},{
							required:true,message:'用户名不能为空'
						},{
							validator:this.isRepeat.bind(this)
						}]
					})(<Input addonBefore={<Icon type="user" />} placeholder="输入用户名"></Input>)
					}
				</FormItem>
				<FormItem>
					{getFieldDecorator('pwd',{
						rules:[{
							pattern:/^[a-zA-Z0-9]{6,18}$/,message:'请输入6-18位英文字符或数字'
						},{
							required:true,message:'输入不能为空'
						}]
					})(<Input addonBefore={<Icon type="lock" />} placeholder="输入密码"></Input>)
					}
				</FormItem>	
				<FormItem>
					{getFieldDecorator('confirm',{
						rules:[{
							required:true,message:'输入不能为空'
						},{
							validator:this.checkPassword.bind(this)
						}]
					})(<Input addonBefore={<Icon type="lock" />} placeholder="请再次输入密码"></Input>)
						
					}
				</FormItem>	
				<FormItem
					{...formItemLayout}
					hasFeedback
				>
					{getFieldDecorator('email',{
						rules:[{
							type:'email',message:'请输入正确的邮箱格式'
						},{
							required:true,message:'输入不能为空'
						}]
						})(
						<Input addonBefore={<Icon type="folder" />} type="email" placeholder="输入邮箱"></Input>
						)
					}

				</FormItem>
				<FormItem>
					<Button htmlType="submit" type="primary" style={{width:"100%"}} onClick={this.reg.bind(this)}>注册</Button>
					<a href="#">有账号，直接登录→</a>
				</FormItem>
			</Form>

			</div>
				
		)

	}
}
export default Form.create()(Reg)