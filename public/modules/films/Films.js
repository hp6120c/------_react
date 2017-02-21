import React from "react";
import {Layout,Menu,Button,Icon,Input} from "antd";
import FilmsTable from "FilmsTable";
import AddModal2 from "AddModal2";
import {ajax} from "tools";
const {Sider,Content} = Layout;
// const {MenuItem} = Menu.Item;
class Films extends React.Component{
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
			url:"films/find",
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
						<Menu  defaultSelectedKeys={['films']}>
							<Menu.Item key="filmAndScreen"><a href="#/filmAndScreen">电影与院线匹配</a></Menu.Item>
							
							<Menu.Item key="films"><a href="#/films">电影管理</a></Menu.Item>
							<Menu.Item key="screenings"><a href="#/screenings">院线管理</a></Menu.Item>
						
							<Menu.Item key="informations"><a href="#/informations">资讯管理</a></Menu.Item>
						</Menu>
					</Sider>
					<div style={{paddingLeft:"90px"}}>
						<div>
							<Input style={{width:"150px",display:"inline"}} placeholder="搜索" addonBefore={<Icon type="search" />}></Input><br/>
							<AddModal2 show={this.show.bind(this)}></AddModal2>
						</div>
						<FilmsTable show={this.show.bind(this)} studentData={this.state.data.studentData}>
							{this.props.children}
						</FilmsTable>

					</div>
				</Layout>
		)
	}
}
export {Films as default}
