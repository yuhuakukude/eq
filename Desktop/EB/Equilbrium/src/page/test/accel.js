import React,{Component} from 'react'
import { SensorManager } from 'NativeModules';
import Echarts from 'native-echarts';
import {accelerometer, setUpdateIntervalForType,SensorTypes} from 'react-native-sensors';

setUpdateIntervalForType(SensorTypes.accelerometer, 500);

export default class Accel extends Component{

  constructor(props){
    super(props)
    this.state={
      x: [],
      y: [],
      z: [],
      times:[]
    }
  }

  componentDidMount(){
    const {times} = this.state
    const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>{
    const now = [new Date().getUTCSeconds()].join('/');
    console.log('x---->',x,'y------>',y,'z----->',z)
    let xData =  this.state.x;
    let timeData = times;
      let yData = this.state.y;
      let zData = this.state.z;
      //xData.push(now);
      timeData.push(now)
      xData.push(x);
      yData.push(y);
      zData.push(z);

     /* if(xData.length>50){
        xData = xData.slice(xData.length-50,xData.length)
      }*/
      this.setState({times: timeData, x: xData, y: yData, z: zData})
    });
  }

  render(){
    const option = {
      title: {
        text: 'ECharts'
      },
      tooltip: {},
      legend: {
        data:['x', 'y', 'z'],
        type: 'scroll'
      },
      xAxis: {
        data: this.state.times
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'x',
        type: 'line',
        data: this.state.x
      },
        {
          name: 'y',
          type: 'line',
          data: this.state.y
        },
        {
          name: 'z',
          type: 'line',
          data: this.state.z
        }]
    };
    return (
        <Echarts option={option} height={300} />
    );
  }
}