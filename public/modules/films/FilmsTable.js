import React from "react";
import {Table,Button,Pagination,Modal,Form} from "antd";
import {ajax} from "tools";
import UpdateModal2 from "UpdateModal2";

class FilmsTable extends React.Component{

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
			url:'films/del',
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
			title: '中文名',
      dataIndex: 'cnname',
			key:'cnname'
		},{
			title:'英文名',
			dataIndex:'enname',
			key:'enname'
		},{
			title:'类型',
			dataIndex:'type',
			key:'type'
		},{
			title:'区域',
			dataIndex:'area',
			key:'area'
		},{
			title:'年代',
			dataIndex:'year',
			key:'year'
		},{
			title:'时长',
			dataIndex:'time',
			key:'time'
		},{
			title:'上映时间',
			dataIndex:'uptime',
			key:'uptime'
		},{
			title:'想看人数',
			dataIndex:'want',
			key:'want'
		},{
			title:'评分',
			dataIndex:'grade',
			key:'grade'
		},{
			title:'评分人数',
			dataIndex:'gradeCount',
			key:'gradeCount'
		},{
			title:'票房',
			dataIndex:'boxOffice',
			key:'boxOffice'
		},{
			title:'剧情简介',
			dataIndex:'intro',
			key:'intro'
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
			<UpdateModal2 show={this.props.show} thisStudent={this.state.thisStudent} studentData={this.props.studentData}  handleCancel={this.handleCancel.bind(this)} visible={this.state.visible}>{this.props.children}</UpdateModal2>
			</div>
		);
	}
}
 export default Form.create()(FilmsTable)
