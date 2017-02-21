import React from "react";
import {Modal,Button,Form,Input,Radio,Icon,Upload} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class UpdateModal2 extends React.Component{
	constructor(props){
		super(props);
	}
	handleOk(){
		var values=this.props.form.getFieldsValue();
		values._id = this.props.thisStudent._id;
		console.log(values);
		ajax({
			type:'post',
			url:'films/update',
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
		const props = {
	action: '/upload',
listType:'picture'}

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
					 label="中文名" hasFeedback>
					 {getFieldDecorator('cnname')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					 label="英文名" hasFeedback>
					 {getFieldDecorator('enname')
					 (<Input />)
					 }

					</FormItem>
					<FormItem
					{...formItemLayout}
					label="类型" hasFeedback>
					 {getFieldDecorator('type')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="区域" hasFeedback>
					 {getFieldDecorator('area')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="年代" hasFeedback>
					 {getFieldDecorator('year')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="时长" hasFeedback>
					 {getFieldDecorator('time')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="上映时间" hasFeedback>
					 {getFieldDecorator('uptime')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="想看人数" hasFeedback>
					 {getFieldDecorator('want')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="评分" hasFeedback>
					 {getFieldDecorator('grade')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="评分人数" hasFeedback>
					 {getFieldDecorator('gradeCount')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="票房" hasFeedback>
					 {getFieldDecorator('boxOffice')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="剧情简介" hasFeedback>
					 {getFieldDecorator('intro')
					 (<Input />)
					 }
					</FormItem>
					<FormItem
					{...formItemLayout}
					label="上传图片" hasFeedback>
					 {getFieldDecorator('file')
					 (<Upload {...props}>
		<Button>
			<Icon type="upload" /> Upload
		</Button>
	</Upload>
)
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
			cnname:{value:props.thisStudent.cnname},
			enname:{value:props.thisStudent.enname},
			type:{value:props.thisStudent.type},
			area:{value:props.thisStudent.area},
			year:{value:props.thisStudent.year},
			time:{value:props.thisStudent.time},
			uptime:{value:props.thisStudent.uptime},
			want:{value:props.thisStudent.want},
			grade:{value:props.thisStudent.grade},
			gradeCount:{value:props.thisStudent.gradeCount},
			boxOffice:{value:props.thisStudent.boxOffice},
			intro:{value:props.thisStudent.intro},
			file:{value:props.thisStudent.file}



		}
	}

}
)(UpdateModal2)
