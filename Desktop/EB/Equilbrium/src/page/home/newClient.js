import React, {Component} from 'react'
import {View, Image, ScrollView} from 'react-native'
import {List, InputItem} from '@ant-design/react-native'
import styled from 'styled-components'
import avatar from '../../resource/icon/avatar_large.jpeg'

const Account = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
Account.Avatar = styled(Image)`
    width: 84px;
    height: 84px;
`

Account.Circle = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    border: 2px solid #33B5E5;
    padding: 2px;
`

export default class NewClient extends Component {

  _renderHeader = () => {
    return (
        <Account>
          <Account.Circle>
            <Account.Avatar roundAsCircle={true} source={avatar} resizeMode={'contain'}/>
          </Account.Circle>
        </Account>
    )
  }

  render() {
    return (
        <ScrollView
            style={{flex: 1}}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
          <List
              renderHeader={this._renderHeader()}
          >
            <List.Item>Patient Detail</List.Item>
            <InputItem clear labelNumber={6}>First Name</InputItem>
            <InputItem labelNumber={6}>Last Name</InputItem>
            <InputItem>Age</InputItem>
            <InputItem labelNumber={8}>Date of Birth</InputItem>
            <InputItem>Gender</InputItem>
            <InputItem>Height</InputItem>
            <InputItem labelNumber={8}>Tallest Height</InputItem>
            <InputItem>Weight</InputItem>
            <List.Item>Medical History</List.Item>
            <InputItem labelNumber={8}>Fall this year</InputItem>
            <InputItem labelNumber={8}>Daily Exercise</InputItem>
            <InputItem labelNumber={12}>Days/WeekExercised</InputItem>
            <InputItem labelNumber={12}>Number of Medications</InputItem>
            <InputItem labelNumber={8}>Physical Health</InputItem>
            <InputItem labelNumber={8}>Mental Health</InputItem>

          </List>
        </ScrollView>
    )
  }
}