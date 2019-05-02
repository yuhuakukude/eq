import React, {Component} from 'react'
import {Text, Image, View, FlatList, TouchableOpacity} from 'react-native'
import {Flex, InputItem, WingBlank, Button, Tag, ListView, Drawer, List} from '@ant-design/react-native'
import styled from 'styled-components'
import logo from '../../resource/icon/avatar.png'
import test from '../../resource/icon/test.png'
import add from '../../resource/icon/add.png'
import menu from '../../resource/icon/menu.png'
import medical from '../../resource/icon/medical.png'
import out from '../../resource/icon/out.png'
import safe from '../../resource/icon/safe.png'
import dashboard from '../../resource/icon/dashboard.png'

const ClientItem = styled(View)`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

ClientItem.Avatar = styled(Image)`
  width: 64px;
  height: 64px;
`

ClientItem.Info = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

ClientItem.Name = styled(Text)`

`

ClientItem.Extra = styled(Text)`

`

ClientItem.Age = styled(Text)`

`

ClientItem.Action = styled(Image)`
  width: 32px;
  height: 32px;
`

const DrawerItem = styled(View)`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

DrawerItem.Title = styled(Text)`
  color: #33B5E5;
  font-size: 20px;
  font-weight: bold;
  margin-left: 24px;
`

DrawerItem.Icon = styled(Image)`
  width: 32px;
  height: 32px;
`


const clients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


export default class Home extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
    headerLeft: (
        <TouchableOpacity onPress={()=>navigation.state.params.leftPress()}>
          <Image  resizeMode={'cover'} source={menu} style={{width: 32, height: 32, marginLeft: 20}}/>
        </TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity onPress={()=>navigation.state.params.rightPress()}>
        <Image resizeMode={'cover'} source={add} style={{width: 32, height: 32, marginRight: 20}}/>
        </TouchableOpacity>
    ),
  });

  _showDrawer=()=>{
    this.drawer && this.drawer.openDrawer()
  }

  _addNewClient=()=>{
    this.props.navigation.navigate('NewClient',{name:'Equilbrium'})
  }

  componentDidMount(){
    this.props.navigation.setParams({ leftPress: this._showDrawer, rightPress:  this._addNewClient})
  }

  renderItemSeparator() {
    return (
        <View style={{height: 10, backgroundColor: COLOR.bgColor}}/>
    )
  }

  sidebar = () => {
    return (
        <List>
          <List.Item>
            <TouchableOpacity>
            <DrawerItem>
              <DrawerItem.Icon source={dashboard}/>
              <DrawerItem.Title>Dashboard</DrawerItem.Title>
            </DrawerItem>
            </TouchableOpacity>
          </List.Item>
          <List.Item>
            <TouchableOpacity>
            <DrawerItem>
              <DrawerItem.Icon source={safe}/>
              <DrawerItem.Title>Home Safety</DrawerItem.Title>
            </DrawerItem>
            </TouchableOpacity>
          </List.Item>
          <List.Item>
            <TouchableOpacity>
            <DrawerItem>
              <DrawerItem.Icon source={medical}/>
              <DrawerItem.Title>Medication</DrawerItem.Title>
            </DrawerItem>
            </TouchableOpacity>
          </List.Item>
          <List.Item>
            <TouchableOpacity>
            <DrawerItem>
              <DrawerItem.Icon source={out}/>
              <DrawerItem.Title>Logout</DrawerItem.Title>
            </DrawerItem>
            </TouchableOpacity>
          </List.Item>
        </List>
    )
  }

  renderItem = () => {
    return (
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('Detail',{name:'Equilbrium'})
        }}>
          <ClientItem>
            <ClientItem.Avatar source={logo}/>
            <ClientItem.Info>
              <ClientItem.Name>Client name</ClientItem.Name>
              <ClientItem.Extra>
                <ClientItem.Age>22</ClientItem.Age>
              </ClientItem.Extra>
            </ClientItem.Info>
            <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate('Questions',{name:'Equilbrium'})
            }}>
              <ClientItem.Action resizeMode={'cover'} source={test}/>
            </TouchableOpacity>
          </ClientItem>
        </TouchableOpacity>
    )
  }

  render() {
    return (
        <Drawer
            sidebar={this.sidebar()}
            position="left"
            open={false}
            drawerRef={el => (this.drawer = el)}
            drawerBackgroundColor="#33B5E5"
        >
          <FlatList
              data={clients}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => this.renderItem(item, index)}
              ItemSeparatorComponent={() => this.renderItemSeparator()}/>
        </Drawer>
    )
  }
}