import {ajax} from "tools";
import React from "react";
import {Layout,Menu,Button,Icon,Input} from "antd";
import FilmAndScreenList from "./FilmAndScreenList";
const {Sider,Content} = Layout;
export default class FilmAndScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            filmsData:[],
            rows:{}
        }
    }
    componentWillMount(){
        this.show();
    }
    show(page){
        ajax({
            type:"get",
            url:"films/find",
            data:{
                page:page,
                rows:5
            },
            success:function(data){
                for(var i=0;i<data.rows.length;i++){
                    data.rows[i].key=i;
                }
                this.setState({
                    filmsData:data
                });
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
                        <FilmAndScreenList show={this.show.bind(this)} data={this.state.filmsData}></FilmAndScreenList>
                    </div>
                </Layout>
        )
       
      
     
       
   }
}