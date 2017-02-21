import React from "react";
import {Layout,Menu,Button,Icon,Input} from "antd";
import ScreeningsTable from "ScreeningsTable";
import AddModal3 from "AddModal3";
import {ajax} from "tools";
const {Sider,Content} = Layout;
class Screenings extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:{
				screeingsData:[]
			},nowpage:""
		}
	}
	 componentWillMount(){
        this.show();
    }
	show(page,rows){
		ajax({
			type:"get",
			url:"screenings/find",
			data:{
				// page:page,rows:5
			},
			success:function(data){
				this.setState({
					data:{
						screeingsData:data,
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
							<Menu.Item key="filmAndScreen"><a href="#/filmAndScreen">电影与院线匹配</a></Menu.Item>
							
							<Menu.Item key="films"><a href="#/films">电影管理</a></Menu.Item>
							<Menu.Item key="screenings"><a href="#/screenings">院线管理</a></Menu.Item>
						
							<Menu.Item key="informations"><a href="#/informations">资讯管理</a></Menu.Item>
						</Menu>
					</Sider>
					<div style={{paddingLeft:"90px"}}>
						<div>
							<Input style={{width:"150px",display:"inline"}} placeholder="搜索" addonBefore={<Icon type="search" />}></Input><br/>
							<AddModal3 show={this.show.bind(this)}></AddModal3>
						</div>
						<ScreeningsTable show={this.show.bind(this)} screeingsData={this.state.data.screeingsData}>
							{this.props.children}
						</ScreeningsTable>
						
					</div>
				</Layout>
		)
	}
}
export {Screenings as default}