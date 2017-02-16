import React from "react";
import {Layout,Menu,Button,Icon,Input} from "antd";
import StudentTable from "StudentTable";
import AddModal from "AddModal";
import {ajax} from "tools";
const {Sider,Content} = Layout;
// const {MenuItem} = Menu.Item;
class Student extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{
				studentData:[]
			},nowpage:""
		}
	}
	 componentWillMount(){
        this.show();
    }
	show(page,rows){
		ajax({
			type:"get",
			url:"students/find",
			data:{
				// page:page,rows:5
			},
			success:function(data){
				console.log(data)
				this.setState({
					data:{
						studentData:data,
					}
				})
			}.bind(this)
		})
	}
	render(){
		return(
				<Layout>
					<Sider style={{backgroundColor:"white"}}>
						<Menu  defaultSelectedKeys={['student']}>
							<Menu.Item key="filmAndScreen">电影与院线匹配</Menu.Item>
							<Menu.Item key="11">正在热映</Menu.Item>
							<Menu.Item key="22">即将上映</Menu.Item>
							<Menu.Item key="33">热播电影</Menu.Item>
							<Menu.Item key="44">电影管理</Menu.Item>
							<Menu.Item key="55">院线管理</Menu.Item>
							<Menu.Item key="66">用户管理/登录/注销</Menu.Item>
							<Menu.Item key="77">资讯管理</Menu.Item>
						</Menu>
					</Sider>
					<div style={{paddingLeft:"90px"}}>
						<div>
							<Input style={{width:"150px",display:"inline"}} placeholder="搜索" addonBefore={<Icon type="search" />}></Input><br/>
							<AddModal show={this.show.bind(this)}></AddModal>
						</div>
						<StudentTable show={this.show.bind(this)} studentData={this.state.data.studentData}>
							{this.props.children}
						</StudentTable>
						
					</div>
				</Layout>
		)
	}
}
export {Student as default}