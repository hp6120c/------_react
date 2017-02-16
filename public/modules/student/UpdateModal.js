import React from "react";
import {Modal,Button,Form,Input,Radio} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class UpdateModal extends React.Component{
	constructor(props){
		super(props);
	}
	handleOk(){
		var values=this.props.form.getFieldsValue();
		values._id = this.props.thisStudent._id;
		console.log(values);
		ajax({
			type:'post',
			url:'students/update',
			data:values,
			success:function(){
				Modal.success({
						title:'OK',
						content:"修改成功"
					});

				this.props.handleCancel();
				this.props.show()
		}.bind(this)
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
				<Modal title="修改" visible={this.props.visible} onCancel={this.props.handleCancel} onOk={this.handleOk.bind(this)}>
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
					 	<RadioGroup>
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
export default Form.create(
{
	 mapPropsToFields(props){
	 	return {
			name:{value:props.thisStudent.name},
			sex:{value:props.thisStudent.sex},
			age:{value:props.thisStudent.age},
			grade:{value:props.thisStudent.grade}

		}
	}
	
}
)(UpdateModal)