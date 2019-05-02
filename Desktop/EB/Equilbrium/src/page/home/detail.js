import React, {Component} from 'react'
import {View, Image, ScrollView} from 'react-native'
import {List} from '@ant-design/react-native'
import styled from 'styled-components'
import avatar from '../../resource/icon/avatar_large.jpeg'

const Account = styled(View)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #33B5E5;
    padding: 12px;
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
    padding: 2px;
    background-color: #fff;
    
`

export default class Detail extends Component {

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
            <List.Item extra="Leslie" arrow="horizontal">First Name</List.Item>
            <List.Item extra="Cheung" arrow="horizontal">Last Name</List.Item>
            <List.Item extra="41" arrow="horizontal">Age</List.Item>
            <List.Item extra="1994/4/1" arrow="horizontal">Date of Birth</List.Item>
            <List.Item extra="M" arrow="horizontal">Gender</List.Item>
            <List.Item extra="180" arrow="horizontal">Height</List.Item>
            <List.Item extra="180" arrow="horizontal">Tallest Height</List.Item>
            <List.Item extra="140" arrow="horizontal">Weight</List.Item>
            <List.Item>Medical History</List.Item>
            <List.Item extra="3" arrow="horizontal">Fall this year</List.Item>
            <List.Item extra="2" arrow="horizontal">Daily Exercise</List.Item>
            <List.Item extra="4" arrow="horizontal">Days/WeekExercised</List.Item>
            <List.Item extra="3" arrow="horizontal">Number of Medications</List.Item>
            <List.Item extra="6" arrow="horizontal">Physical Health</List.Item>
            <List.Item extra="8" arrow="horizontal">Mental Health</List.Item>

          </List>
        </ScrollView>
    )
  }
}