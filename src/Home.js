import React, { Component } from "react";
import { Container, Drawer, StyleProvider, Root, Text, View, Content, Card, CardItem, Body, Header, Item, Icon, Input, Button, Right, Segment, Picker, Form } from 'native-base';
import styles from './Style.js';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import SideBar from './SideBar';
import AppHeader from './AppHeader';

export default class Home extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const Titulo = 'Home';
    const noLeftView = false
    const styleLogin = styles
    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          side = "right"
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <Header searchBar rounded hasSegment>
                <Item style={{flex: 6,}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
                <Right style={{flex: 1,}}>
                  <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                  </Button>
                </Right>
              </Header>
              <Segment>
                {/* <Icon name='options' /> */}
                <Button first>
                  <Text>Empresa</Text>
                </Button>
                <Button>
                  <Text>Producto</Text>
                </Button>
                <Button last active>
                  <Text>Ciudad</Text>
                </Button>
              </Segment>
              <Content >
                <Form style={[styles.formFilterHome]} >
                  <Button last active style={[styles.formFilterHomeBtn]} >
                    <Text>Filtros</Text>
                  </Button>
                  <Picker
                    mode="dropdown"
                    placeholder="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Select your SIM"
                    textStyle={{ color: "#5cb85c" }}
                    itemStyle={{
                      backgroundColor: "#d3d3d3",
                      marginLeft: 0,
                      paddingLeft: 10
                    }}
                    itemTextStyle={{ color: '#788ad2' }}
                    style = {
                      {
                        width: '45%',
                        backgroundColor: '#D80212',
                        textAlign: 'center',
                        color:'#fff',
                      }
                    }
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="Sector" value="key0" />
                    <Picker.Item label="Agronegocios" value="key1" />
                    <Picker.Item label="Exportación de servicios" value="key2" />
                    <Picker.Item label="Insdustria de la vestimenta y decoración" value="key3" />
                    <Picker.Item label="Manufacturas diversas" value="key4" />
                    <Picker.Item label="Productos Pesqueros" value="key5" />
                  </Picker>
                </Form>
              </Content>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }
}

/* export default class Home extends Component {
  
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  constructor(props) {
    super(props);
    this.firstpage = this.firstpage.bind(this);
    this.secondpage = this.secondpage.bind(this);
    this.thirdpage = this.thirdpage.bind(this);
    this.state = {
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false,

    };
  }
  
  render() {
    const Titulo = 'Home';
    const noLeftView = false
    const styleLogin = styles

    const page = this.state.page;
    let shows = null;
    if (page == 1) {
      shows = <Text > hello </Text>
    } else if (page == 2) {
      shows = <Text > hello page 2 </Text>
    } if (page == 3) {
      shows = <Text > hello page 3 </Text>
    }

    return (
      <StyleProvider style={getTheme(material)}>
        <Drawer
          side = "right"
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <Root>
            <Container>
              <Header searchBar rounded hasSegment>
                <Item style={{flex: 6,}}>
                  <Icon name="ios-search" />
                  <Input placeholder="Search" />
                </Item>
                <Right style={{flex: 1,}}>
                  <Button transparent onPress={()=> this.openDrawer()}>
                      <Icon name='menu' />
                  </Button>
                </Right>
              </Header>
              <Segment>
                <Button first active={this.state.firstpageactive} onPress= {this.firstpage}>
                  <Text>Empresa</Text>
                </Button>
                <Button active={this.state.secondpageactive} onPress= {this.secondpage}>
                  <Text>Producto</Text>
                </Button>
                <Button last  active={this.state.thirdpageactive} onPress= {this.thirdpage}>
                  <Text>Ciudad</Text>
                </Button>
              </Segment>
                <Content padder>
                  {shows}
                </Content>
            </Container>
          </Root>
        </Drawer>
      </StyleProvider>
    );
  }

  firstpage() {
    this.setState({
      page: 1,
      firstpageactive: true,
      secondpageactive: false,
      thirdpageactive: false
    })
  }

  secondpage() {
    this.setState({
      page: 2,
      firstpageactive: false,
      secondpageactive: true,
      thirdpageactive: false,
    })
  }
  
} */

module.exports = Home;