import React from "react";
import {Table,Button,Pagination,Modal,Form} from "antd";
import {ajax} from "tools";
import UpdateModal from "UpdateModal";

class StudentTable extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			visible:false,
			thisStudent:{}
		}
		this.props.show()
	}
	handleCancel(){
		this.setState({
			visible:false
		})
	}

	del(event){
		console.log(event._id);
		ajax({
			type:'post',
			url:'students/del',
			data:{
				_id:event._id
			},
			success:function(){
				console.log("del suc");
				Modal.success({
					title:"OK",
					content:"删除成功"
				})
				this.props.show();
			}.bind(this)
		})
	}
	update(event){
		this.setState({
			visible:true,
			thisStudent:event
		})
		console.log("修改")
		console.log(event)

	}
	render() {
		const columns =[{
			title:'姓名',
			dataIndex:'name',
			key:'name'
		},{
			title:'性别',
			dataIndex:'sex',
			key:'sex'
		},{
			title:'年龄',
			dataIndex:'age',
			key:'age'
		},{
			title:'成绩',
			dataIndex:'grade',
			key:'grade'
		},{
			title:'操作',
			dataIndex:'action',
			key:'action',
			render:(text,record)=>{
				return <a style={{width:"200px"}}>
					<Button type="primary" onClick={()=>{this.update(record)}}>修改</Button>
					&nbsp;
					<Button type="primary" onClick={()=>{this.del(record)}}>删除</Button>
				</a>
			}
			
		}]
		const pagination = {
			total:this.state.total,
			defaultCurrent:1
		}
		// this.show();
		return (
			<div>
			<Table style={{width:'900px',backgroundColor:'white',marginTop:"20px"}} columns={columns} pagination={pagination} rowKey="_id"  dataSource={this.props.studentData} bordered></Table>
			<UpdateModal show={this.props.show} thisStudent={this.state.thisStudent} studentData={this.props.studentData}  handleCancel={this.handleCancel.bind(this)} visible={this.state.visible}>{this.props.children}</UpdateModal>
			</div>
		);
	}
}
 export default Form.create()(StudentTable)