import React from "react";
import {Modal,Button,Form,Input,DatePicker,Upload,Icon} from 'antd';
import {ajax} from 'tools';
const FormItem = Form.Item;
class UpdateModal extends React.Component{
	constructor(props){
		super(props);
		this.state={

			indexImgList:[],
			indexImgPath:this.props.indexImg
		}
	}
	componentWillReceiveProp(newProps){
			this.setState({
					indexImgPath:newProps.indexImgPath
			});
	}
	handleok(){
		var values=this.props.form.getFieldsValue();
		values._id= this.props.thisStudent._id;
		// values.date = values.date.format("YYYY-MM-DD");
		values.indexImg=JSON.stringify(this.state.indexImgPath);
		console.log(values);
		ajax({
			type:'get',
			url:'informations/update',
			data:values,
			success:function(){
				this.props.show();
				this.props.handleCancel();
		}.bind(this)
		})
	}
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
				<Modal title="修改" visible={this.props.visible} onCancel={this.props.handleCancel} onOk={this.handleok.bind(this)}>

				<Form>
				<FormItem
				{...formItemLayout}
				label="图片" hasFeedback>
				{getFieldDecorator('indexImg')
				(<div><Upload {...props}>
					 <Button><Icon type="upload"/>上传</Button>
					 </Upload>
				 </div>)}
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
export default Form.create(
{
	 mapPropsToFields(props){
	 	return {
			title:{value:props.thisStudent.title},
			// date:{value:props.thisStudent.date},
			indexImg:{value:props.thisStudent.indexImg},
			content:{value:props.thisStudent.content}
		}
	}

}
)(UpdateModal)
