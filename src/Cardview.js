import React, { Component } from 'react';
import { Layout, Input, Menu, Button } from "antd";
import Card from "./Card";
import { SearchOutlined } from '@ant-design/icons';
import "../node_modules/antd/dist/antd.css";
const { Sider, Content, Header } = Layout;

export default class Cardview extends Component {
    render() {
        return (
            <div>
            <Layout>
            {/* <Sider>
            <h1 style={{ fontSize: "20px", color: "white" }}>Slider</h1>
            {/* <Menu
              style={{
                width: "100%",
                position: "relative",
                color: "darkgrey",
                top: "5em",
                backgroundColor: "#E43F5A",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
            >
              <Menu.Item
                style={{ padding: "10px", textAlign: "center" }}
                key="1"
              >
                Navigation One
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="2">
                Navigation Two
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="3">
                Navigation Three
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="5">
                Navigation Four
              </Menu.Item>
              <Menu.Item style={{ padding: "10px" }} key="6">
                Navigation Five
              </Menu.Item>
            </Menu> 
          </Sider> */}
          <Layout>
            {/* <Header>
              <h1 style={{ "fontSize": "30px", color: "white" }}>
                ITunes Music
              </h1>
            </Header> */}

            {/* <Layout style={{ backgroundColor: "#121212", height: "100px" }}>
              <div className="serach">
                <form onSubmit={this.onSubmit}>
                  <Input
                    placeholder="search"
                    bordered={false}
                    style={{
                      width: "500px",
                      borderBottom: "3px solid #E43F5A",
                      height: "45px",
                      color: "white",
                      position: "relative",
                      top: "25px",
                    }}
                    // value={this.state.artist}
                    onChange={(e) => this.onChange(e)}
                  />
                  <Button style={{
                    position: "relative",
                    top: "22px", right: "40px"
                  }} type="primary" htmlType="submit" shape="circle" icon={<SearchOutlined />} />
                </form>
              </div>
            </Layout> */}
            <div className="cardContainer">
        <div className="card">
          <h3 className="title">{this.props.artist.artistName}</h3>
         
          <img className="img" src={this.props.artist.artworkUrl100} alt="Artist Image" />
          <h4 className="track">{this.props.artist.trackName}</h4>
          <div className="emptybarOne"></div>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
        </div>
      </div>
          </Layout>


            </Layout>
                
            </div>
        )
    }
}
