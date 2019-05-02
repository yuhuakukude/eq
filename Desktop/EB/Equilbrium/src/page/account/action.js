import React, {Component} from 'react'
import {ScrollView, Image, View,Text} from 'react-native'
import {Flex, InputItem, WingBlank, Button, Tag} from '@ant-design/react-native'
import styled from 'styled-components'
import Login from "./login";

const ActionItem = styled(View)`
  width: 40%;
  height: 84px;
  border: 2px solid #fff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`

ActionItem.Content = styled(Text)`
    color: #fff;
    font-size: 24px;
    width: 100%;
    text-align: center;
`


export default class Action extends Component{
  render(){
    return(
        <ScrollView style={{backgroundColor:COLOR.primaryColor}}>
          <WingBlank>
            <Flex direction={'column'} >
              <Flex.Item style={{width:'100%', marginTop:64,flexDirection:'row',justifyContent:'space-around'}}>
                <ActionItem>
                  <ActionItem.Content onPress={()=>{
                    this.props.navigation.navigate('Home',{name:'Equilbrium'})
                  }}>New Test</ActionItem.Content>
                </ActionItem>
                <ActionItem>
                  <ActionItem.Content onPress={()=>{
                    this.props.navigation.navigate('Home',{name:'Equilbrium'})
                  }}>Select   Client</ActionItem.Content>
                </ActionItem>
              </Flex.Item>

              <Flex.Item style={{width:'100%', marginTop:64,flexDirection:'row',justifyContent:'space-around'}}>
                <ActionItem>
                  <ActionItem.Content>Home Safety</ActionItem.Content>
                </ActionItem>
                <ActionItem>
                  <ActionItem.Content>Medication</ActionItem.Content>
                </ActionItem>
              </Flex.Item>

              <Flex.Item style={{width:'100%', marginTop:64,flexDirection:'row',justifyContent:'space-around'}}>
                <ActionItem>
                  <ActionItem.Content>DashBoard</ActionItem.Content>
                </ActionItem>
                <ActionItem>
                  <ActionItem.Content>Logout</ActionItem.Content>
                </ActionItem>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </ScrollView>
    )
  }
}