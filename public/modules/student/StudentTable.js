import React from "react";
import {Table,Button,Pagination,Modal,Form} from "antd";
import {ajax} from "tools";
import UpdateModal from "UpdateModal";

class StudentTable extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			visible:false,
			thisStudent:[]
		}
		this.props.show()
	}
	handleCancel(){
		this.setState({
			visible:false
		})
	}

	del(event){
		ajax({
			type:'post',
			url:'informations/del',
			data:{
				_id:event._id
			},
			success:function(){
				this.props.show();
			}.bind(this)
		})
	}
	update(event){

		this.setState({
			visible:true,
			thisStudent:event
		})
		// console.log("修改")
		//获取当前的数据
		// console.log(event)

	}
	render() {
		const columns =[
			{
				title:'图片',
				dataIndex:'indexImg',
				key:'indexImg',
				render:(record)=>{
					// console.log(record);
					return <img src={record}/>
				}


			},
			{
			title:'电影名',
			dataIndex:'title',
			key:'title'
		},{
			title:'日期',
			dataIndex:'date',
			key:'date'
		},{
			title:'详情',
			dataIndex:'content',
			key:'content'
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

		}];
		// const pagination = {
		// 	total:this.props.studentData.length,
		// 	showSizeChanger:true,
		// 	onShowSizeChange:(curpage,maxpage)=>{
		// 		console.log(curpage,maxpage);
		// 	},
		// 	onChange:(curpage)=>{
		// 		console.log(curpage);
		// 	}
		// };
		// this.show();
		return (
			<div>
			<Table style={{width:'1000px',backgroundColor:'white',marginTop:"20px"}}
			columns={columns} rowKey={record=>record._id} dataSource={this.props.studentData} bordered></Table>

			<UpdateModal show={this.props.show} thisStudent={this.state.thisStudent}
			studentData={this.props.studentData}  handleCancel={this.handleCancel.bind(this)}
			visible={this.state.visible}>{this.props.children}</UpdateModal>
			</div>
		);
	}
}
 export default Form.create()(StudentTable)
