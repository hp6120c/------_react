import React from "react";
import {Modal,Button,Form,Input,DatePicker,Upload,Icon} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
class AddModal extends React.Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,
			indexImgList:[],
			indexImgPath:[]
		}
	}
	add(){
		// console.log('增加');
		this.setState({
			visible:true
		})
	}
	handleok(){
			var data=this.props.form.getFieldsValue();
			console.log(data);
			data.date = data.date.format("YYYY-MM-DD");
			data.indexImg=JSON.stringify(this.state.indexImgPath);
			ajax({
				type:'post',
				url:'informations/add',
				data:data,
				success:function(){
					// console.log('add suc');
					this.setState({
						visible:false
					});
					this.props.show()
				}.bind(this)
			})
	}
	handleCancel(){
		// console.log('handleCancel');
		this.setState({
			visible:false
		})
	}
	//点击性别的按钮
	// onChange(event){
	// 	this.setState({
	// 		value:event.target.value
	// 	})
	// }
	render(){
		const {getFieldDecorator} = this.props.form;
		const formItemLayout = {
			labelCol:{span:6},
			wrapperCol:{span:9}
		};
		const props={
			action:'/upload',
			listType:'picture',
			fileList:this.state.indexImgList,
			onChange:function(data){
				let fileList=data.fileList;
				let indexPath=fileList.map(function(file){
					console.log(file);
					return file.response;
				});
				this.setState({
					indexImgList:fileList,
					indexImgPath:indexPath
				});
			}.bind(this)
		};
		return (
			<div>
				<Button type="primary" onClick={this.add.bind(this)}>增加</Button>
				<Modal title="增加" ref="son" test="test" visible={this.state.visible} onOk={this.handleok.bind(this)} onCancel={this.handleCancel.bind(this)}>

				<Form>
				<FormItem
				{...formItemLayout}
				label="图片" hasFeedback>
				<div><Upload {...props}>
					 <Button><Icon type="upload"/>上传</Button>
					 </Upload>
				 </div>
				</FormItem>
					<FormItem
					{...formItemLayout}
					 label="电影名" hasFeedback>
					 {getFieldDecorator('title')
					 (<Input />)}
					</FormItem>
					<FormItem
					{...formItemLayout}
					 label="日期" hasFeedback>
					 {getFieldDecorator('date')
					 (<DatePicker />)}
					</FormItem>

					<FormItem
					{...formItemLayout}
					 label="详情" hasFeedback>
					 {getFieldDecorator('content')
					 (<Input />)}
					</FormItem>
				</Form>

				</Modal>

			</div>

		)
	}
}
export default Form.create()(AddModal)
