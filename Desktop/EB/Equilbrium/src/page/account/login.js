import React, {Component} from 'react'
import {ScrollView, Image, View} from 'react-native'
import {Flex, InputItem, WingBlank, Button, Tag} from '@ant-design/react-native'
import equilibriumlogofull from '../../resource/icon/equilibriumlogofull.png'

export default class Login extends Component {

  static navigationOptions = {
    title: 'Login',
  };

  constructor(props){
    super(props)
    this.state={
      client: false
    }
  }

  render() {
    return (
        <ScrollView>
          <WingBlank>
            <Flex direction={'column'} >
              <Flex.Item>
                <Image style={{paddingHorizontal:64,marginTop:28}} source={equilibriumlogofull}/>
              </Flex.Item>
              <Flex.Item style={{width:'100%', marginTop:64}}>
                <InputItem clear placeholder="User Name"/>
              </Flex.Item>
              <Flex.Item style={{width:'100%', marginTop:20}}>
                <InputItem clear placeholder="Password"/>
              </Flex.Item>
              <Flex.Item style={{width:'100%', marginTop:20}}>
                <Flex>
                  <Flex.Item style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
                    <Tag selected={this.state.client}>client</Tag>
                  </Flex.Item>
                  <Flex.Item style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
                    <Tag selected={!this.state.client}>Physician</Tag>
                  </Flex.Item>
                </Flex>
              </Flex.Item>
              <Flex.Item style={{width:'100%', marginTop:64}}>
                <Button type="primary" onPress={()=>{
                    this.props.navigation.navigate('Action',{name:'Equilbrium'})
                }}>Sign In</Button>
              </Flex.Item>
            </Flex>
          </WingBlank>
        </ScrollView>
    )
  }
}