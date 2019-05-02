import React,{Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import {Steps, Button} from '@ant-design/react-native'
import styled from 'styled-components'
import next from '../../resource/icon/next.png'
import pre from '../../resource/icon/pre.png'


const Question = styled(View)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px;
`

Question.Item = styled(Text)`
  display: flex;
  flex: 1;
  font-size: 18px;
  color: black;
`

const StepHandler = styled(View)`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
`

StepHandler.Button = styled(Image)`
    width: 48px;
    height: 48px;
`


export default class Questions extends Component{

  constructor(props){
    super(props)
    this.state={
      steps: [
        { title: 'Waiting', description: 'Please press Accept to accept This app will give you your Equilibrium Quotient or EQ Score - a measure of your vitality from 0 to 100. The more often you measure, the more accurate your results will be. Use the app to track your EQ Score. A guide to interpreting your results and information about using them to help you age well can be found at the Agewell Biometrics website here About Equilibrium'},
        { title: 'Waiting', description: 'Would you like this to be a practice test? (Practice test data is not saved.)' },
        { title: 'Waiting', description: 'Have you had any falls since your last log in?' },
        { title: 'Waiting', description: 'Did you exercise today?' },
        { title: 'Waiting', description: 'How do you feel today physically? Please provide details below.' },
        { title: 'Waiting', description: 'How do you feel today mentally? Please provide details below.' },
      ],
      step: 0,
    }
  }

  _pre = ()=>{
    if(this.state.step === 0){
      return
    }
    this.setState({step: --this.state.step})
  }

  _next = ()=>{
    this.setState({step: ++this.state.step})
  }

  render(){
    const  {steps,step} = this.state
    return(
        <Question>
        <Steps size="large" current={step} direction="vertical">
          {steps.map((item, index) => (
              <Steps.Step
                  key={index}
                  status={item.status}
              />
          ))}
        </Steps>
          <Question.Item>{steps[step].description}</Question.Item>
          {step === 5?(
              <StepHandler style={{justifyContent:'center'}}>
              <Button onPress={()=>{
                this.props.navigation.navigate('Accel',{name:'Equilbrium'})
              }} style={{display:'flex',flex:1}} type="primary">Start Test</Button>
              </StepHandler>
          ):(
              <StepHandler>
                <TouchableOpacity onPress={this._pre}>
                  <StepHandler.Button resizeMode={'cover'} source={pre}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._next}>
                  <StepHandler.Button resizeMode={'cover'} source={next}/>
                </TouchableOpacity>
              </StepHandler>
          )}

        </Question>
    )
  }
}