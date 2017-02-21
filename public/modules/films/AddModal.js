import React from "react";
import {Modal,Button,Form,Input,Radio,Icon,Upload} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class AddModal2 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,

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
			visible:false,
			indexImgList:[],
			indexImgPath:[]

		});
		this.props.form.validateFields((err,values)=>{
			console.log(values);
			values.indexImg =JSON.stringify(this.state.indexImgPath)
			ajax({
				type:'post',
				url:'films/add',
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
		const props = {
  action: '/upload',
listType:'picture',
multiple:true,
fileList:this.state.indexImgList,
onChange:function(data){
	let fileList=data.fileList;
	let indexPath=fileList.map(function(file){
		return file.response;
	});
	this.setState({
		indexImgList:fileList,
		indexImgPath:indexPath
	});
}.bind(this)
};

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
export default Form.create()(AddModal2)
