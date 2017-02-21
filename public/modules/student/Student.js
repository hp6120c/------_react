import React from "react";
import {Layout,Menu,Button,Icon,Input} from "antd";
import StudentTable from "StudentTable";
import AddModal from "AddModal";
import {ajax} from "tools";
const {Sider,Content} = Layout;
// const {MenuItem} = Menu.Item;
class Information extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{
				studentData:[]
			},
			rows:{}
		}
	}
	 componentWillMount(){
        this.show();
    }
	show(curpage,rows){
		ajax({
			type:"get",
			url:"informations/find",
			data:{
				page:curpage,
				rows:20
			},
			success:function(data){
				// console.log(data.rows)
				this.setState({
					data:{
						studentData:data.rows,
						nowpage:curpage
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
							<Menu.Item key="filmAndScreen"><a href="#/FilmAndScreen">电影与院线匹配</a></Menu.Item>
							
							<Menu.Item key="films"><a href="#/films">电影管理</a></Menu.Item>
							<Menu.Item key="screenings"><a href="#/screenings">院线管理</a></Menu.Item>
						
							<Menu.Item key="informations"><a href="#/informations">资讯管理</a></Menu.Item>
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
export {Information as default}
