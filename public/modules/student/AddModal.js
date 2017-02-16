import React from "react";
import {Modal,Button,Form,Input,Radio} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class AddModal extends React.Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,
			value:"女"
		}
	}
	add(){
		console.log('增加');
		this.setState({
			visible:true
		})
	}
	handleok(){
		console.log("handleok");
		this.setState({
			visible:false
		});
		this.props.form.validateFields((err,values)=>{
			console.log(values)	
			ajax({
				type:'post',
				url:'students/add',
				data:values,
				success:function(){
					console.log('add suc');
					this.props.show()
				}.bind(this)
			})
		})
	}
	handleCancel(){
		console.log('handleCancel');
		this.setState({
			visible:false
		})
	}
	onChange(event){
		this.setState({
			value:event.target.value
		})
	}
	render(){
		const {getFieldDecorator} = this.props.form;
		const formItemLayout = {
			labelCol:{span:6},
			wrapperCol:{span:9}
		}
		return (
			<div>
				<Button type="primary" onClick={this.add.bind(this)}>增加</Button>
				<Modal title="增加" ref="son" test="test" visible={this.state.visible} onOk={this.handleok.bind(this)} onCancel={this.handleCancel.bind(this)}>

				<Form>
					<FormItem
					{...formItemLayout}
					 label="姓名" hasFeedback>
					 {getFieldDecorator('name')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					 label="性别" hasFeedback>
					 {getFieldDecorator('sex')
					 (
					 	<RadioGroup onChange={this.onChange.bind(this)} setFieldsValue={this.state.value}>
					 		
					 	<Radio value={"男"}>男</Radio>
					 	<Radio value={"女"}>女</Radio>
					 	</RadioGroup>

					 	)
					 }
					</FormItem>
					<FormItem 
					{...formItemLayout}
					label="年龄" hasFeedback>
					 {getFieldDecorator('age')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					 label="成绩" hasFeedback>
					 {getFieldDecorator('grade')
					 (<Input />)
					 }
					</FormItem>
				</Form>

				</Modal>
				
			</div>
		
		)
	}
}
export default Form.create()(AddModal)