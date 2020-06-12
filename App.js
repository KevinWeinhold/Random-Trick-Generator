import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, Button, View, Slider, Switch, TouchableOpacity } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { Slider} from 'react-native-elements'
import { setLightEstimationEnabled } from 'expo/build/AR';
// import styles from 'styled-components/native';


const instructions = Platform.select({ 
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

// const SlideBoi = styled.Slider`


export class Rails extends Component {
  
  state={
    frontOrBack: 'ROLL NEW TRICK',
    trickState: '',
    sliderValue: 3,
    difficulty: 'Hard',
    easyPastRails: '',
    medPastRails: '',
    hardPastRails: ''
  }

  combined = () =>{
    this.stance();
    this.trick();
    this.diffRender();
  }

  diffAndVal = () =>{
    this.diffRender();
    (value)=> this.setState({ sliderValue: value})
  }


  stance = () =>{
    
    var fSbS = [
      'Frontside',
      'Backside'
    ]

    var fsbsrandoNumber = Math.floor(Math.random()*fSbS.length);

    this.setState({
      frontOrBack:fSbS[fsbsrandoNumber],
    })
  }

  trick = () =>{
    var trickList = [
      //Easies:
      'Anything',
      '5050',
      'Tail Press',
      'Boardslide to Regular',
      'Boardslide to Fakie (to Switch)',
      
      //Mediums:
      'Nose Press',
      'Switch 5050',
      'Boardslide Pretzel 270 out',
      'Bluntslide Same-way 270 out',
      '180 on',
      '180 on any 180 out',
      'Switch 180 on',
      'Switch 180 on any 180 out',
      'Lisplide to Regular',
      'Lispslide to Fakie (to Switch)',
      'Switch Boardslide to Regular',
      'Switch Boardslide to Switch',
      'Lisplide Same-way 270 out',
      'Switch Anything',
      '5050 Frontside 360 out',
      '5050 Backside 360 out',
      'Switch 180 on any 360 out',

      //Hards:
      '180 on any Switch 360 out',
      'Switch Lipslide Same-way 270 out',
      'Switch Boardslide Pretzel 270 out',
      'Switch Bluntslide Same-way 270 out',
      'Switch Nose Press',
      'Switch Tail Press',
      '270 on',
      'Switch 270 on',
      '360 on',
      'Switch 360 on',
      'Switch Lipslide',
      'Lisplide Pretzel 270 out',
      'Switch Lipslide Pretzel 270 out'
    ]
    //var trickrandoNumber = Math.floor(Math.random()*trickList.length);
    
    if(this.state.difficulty === 'Easy'){
      console.log(`easypastrails ${this.state.easyPastRails}`);
      var easyRails = Math.floor(Math.random()*5);
      if(easyRails == this.state.easyPastRails){ // logic for no repeating random tricks
        while(easyRails == this.state.easyPastRails){
          easyRails = Math.floor(Math.random()*5);
        }
      }
      this.state.easyPastRails = easyRails;
      this.setState({
        trickState:trickList[easyRails],
      })      
    }
    if(this.state.difficulty === 'Medium'){
      var medRails =  Math.floor(Math.random()*22);
      if(medRails == this.state.medPastRails){
        while(medRails == this.state.medPastRails){
          medRails = Math.floor(Math.random()*22);
        }
      }
      this.state.medPastRails = medRails;
      this.setState({
        trickState:trickList[medRails],
      })
    }
    if(this.state.difficulty === 'Hard'){
      var hardRails =  Math.floor(Math.random()*trickList.length);
      if(hardRails == this.state.hardPastRails){
        while(hardRails == this.state.hardPastRails){
          hardRails = Math.floor(Math.random()*trickList.length);
        }
      }
      this.state.hardPastRails = hardRails;
      this.setState({
        trickState:trickList[hardRails],
      })
    }
  }
  
  diffRender = () =>{
    var diffBoi = '';

    if(this.state.sliderValue < .5 ){
      diffBoi = 'Easy'
    }
    else if(this.state.sliderValue ==.5){
      diffBoi = 'Medium'
    }
    else {
      diffBoi = 'Hard'
    }
    
    this.setState({
      difficulty: diffBoi
    })
  }
  
  //Rail render 
  render() {
    return (
      <View style={styles.container}>
        <View className="DiceContainer">
          
          <Text style = {styles.trickBox}>{this.state.frontOrBack}{"\n"}
          {this.state.trickState}{"\n"}{"Goomba Test"}
          </Text>
        </View>
        <View>
          <TouchableOpacity 
          style = {styles.trickButton}
          //  color={'#16a085'} marginTop= '90' fontSize = '200'
          onPress={this.combined.bind(this)} >
            <Text style = {styles.trickButton}>New Trick</Text>
          </TouchableOpacity>
        </View>
         
            <Slider 
              style={{width: 200, height: 90, borderRadius: 10}}
              minimumValue={0}
              maximumValue={1}
              value={this.state.sliderValue}
              onValueChange={(value)=> this.setState({ sliderValue: value})}
              //onValueChange={this.diffRender.bind(this)}
              onSlidingComplete={this.diffRender.bind(this)}
              maximumTrackTintColor='grey'  
              minimumTrackTintColor='#D93833'
              step={.5}>
              {/* <Input type="range" min={0} max = {255} value={this.state.value} className = "slider" onChange = {this.handleonChange}/> */}
            </Slider>
            <View><Text style = {styles.diffBox}>{this.state.difficulty}</Text></View>
            
          
      </View>
    );
  }
}

export class Jumps extends Component{
  //const [isEnabled, setIsEnabled] = useState(false);
  //toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  state={
    frontOrBack: 'ROLL NEW TRICK',
    regOrSwi:'',
    trickState: '',
    grabState: '',
    sliderValue: 1,
    difficulty: 'Hard',
    grabOrNo: 'grabOrNo',
    switchValue: false
  }

  combinedJump = () =>{
    this.grabOrNoGrab(); 
    this.regOrSwitch(); 
    this.stance(); // more like direction (fs or bs)
    this.trick();
  }

  stance = () =>{
    
    var fSbS = [
      'Frontside',
      'Backside'
    ]

    var fsbsrandoNumber = Math.floor(Math.random()*fSbS.length);

    this.setState({
      frontOrBack:fSbS[fsbsrandoNumber],
    })
  }

  regOrSwitch = () =>{
    
    var regSwi = [
      'Regular',
      'Switch'
    ]

    var regSwirandoNumber = Math.floor(Math.random()*regSwi.length);

    this.setState({
      regOrSwi:regSwi[regSwirandoNumber],
    })
  }

  grabOrNoGrab = () =>{
    var grabOrNot = [
      'grabOnly',
      'spin'
    ]
    
    var grabber = Math.floor(Math.random()*grabOrNot.length);

    if(this.state.switchValue == true){ // if the grab only mode switch is on, force grabOnly mode
      this.setState({
        grabOrNo: 'grabOnly'
      })
    }
    else{ // else, it will randomly choose spin/grabonly
        this.setState({
        grabOrNo:grabOrNot[grabber],
      })
    }
    
  }

  trick = () =>{
    var trickList = [ // i edited it to get rid of 'switch 360' etc. but do i want it like that...
      // easy spin
      'Any Spin',
      '180',
      '360',
      // medium spin
      'Hardway 180',
      'Switch 360',
      '540',
      'Switch 540',
      '720',
      // hard spin
      'Switch 720',
      '900',
      'Switch 900' 
    ]

    var grabList = [
      'Indy',
      'Melon',
      'Mute',
      'Nose',
      'Tail',
      'Stale Fish',
      'Any Grab',
      'Any Grab',
      'Any Grab',
      'Any Grab',
      'Any Grab',
      'Any Grab',
      'Any Grab',
      'No Grab',
      'No Grab',
      'No Grab',
      'No Grab',
      'No Grab',
      'No Grab'
    ]
    var grabOnlyList = [
      // easy/green 1 - 9
      'Indy',
      'Melon',
      'Mute',
      'Nose',
      'Tail',
      'Stalefish', // cutoff for spins with grabs
      'Stinkbug Indy',
      'No',
      //medium/blue 9 - 20
      'Method',
      'Roast Beef',
      'Rocket air',
      'Crail',
      'Japan',
      'Suitcase',
      'Sad Air',
      'Tuck Knee',
      'Seat Belt',
      'Stelmasky',
      'Stiffy',
      'Crail',

      //hard/black
      'Double Nose',
      'Double Tail',
      'Tai Pan',
      'Canadian Bacon',
      'Nuclear',
      'Switch Method',
      
      // expert/double black
      'Cookie Monster',
      'Spaghetti',
      'Bloody Dracula',
      'Reach Around',
      'Dracula Method'
    ]
    var trickrandoNumber = Math.floor(Math.random()*trickList.length);
    var grabrandoNumber = Math.floor(Math.random()*grabList.length);

    /////////Jump Logic////////////////////////////////////////////////////////////////////////////////////////

    // if spin, easy grab (1-6)
    // if no spin, grab difficulty matches set difficulty
    console.log(this.state.switchValue);
    
    console.log(this.state.grabOrNo);
    if(this.state.grabOrNo === 'grabOnly'){// if just a grab
      if(this.state.difficulty === 'Easy'){
        var easyGrab = Math.floor(Math.random()*8);
        this.setState({
          frontOrBack:'',
          regOrSwi:'',
          trickState:`${grabOnlyList[easyGrab]} Grab`,
          grabState:''
        })
      }
      if(this.state.difficulty === 'Medium'){
        var medGrab = Math.floor(Math.random()*20);
        this.setState({
          frontOrBack:'',
          regOrSwi:'',
          trickState:`${grabOnlyList[medGrab]} Grab`,
          grabState:''
        })
      }
      if(this.state.difficulty === 'Hard'){
        var hardGrab = Math.floor(Math.random()*grabOnlyList.length);
        this.setState({
          frontOrBack:'',
          trickState:`${grabOnlyList[hardGrab]} Grab`,
          grabState:''
        })
      }
    }
    else{
      if(this.state.difficulty === 'Easy'){
        var easyJump = Math.floor(Math.random()*4);
        this.setState({
          regOrSwi:'',
          trickState:`${trickList[easyJump]}`,
          grabState:grabList[grabrandoNumber]
        })      
      }
      if(this.state.difficulty === 'Medium'){
        var medJump =  Math.floor(Math.random()*8);;
        this.setState({
          regOrSwi:'',
          trickState:trickList[medJump],
          grabState:grabList[grabrandoNumber]
        })
      }
      if(this.state.difficulty === 'Hard'){
        var hardJump =  Math.floor(Math.random()*trickList.length);;
        this.setState({
          regOrSwi:'',
          trickState:trickList[hardJump],
          grabState:grabList[grabrandoNumber]
        })
      }
    }
    
    
    /////////////////////////////////////////
  }

  diffRender = () =>{
    var diffBoi = '';

    if(this.state.sliderValue < .5 ){
      diffBoi = 'Easy'
    }
    else if(this.state.sliderValue ==.5){
      diffBoi = 'Medium'
    }
    else {
      diffBoi = 'Hard'
    }
    this.setState({
      difficulty: diffBoi
    })
  }

  //Jump Render
  render(){
    return(
      <View style={styles.container}>
        <View className="DiceContainer">
          
          <Text style = {styles.trickBox}>{this.state.frontOrBack}{this.state.regOrSwi}{"\n"}
          {this.state.trickState}{"\n"}{this.state.grabState}
          </Text>
        </View>
        <View>
          
          <TouchableOpacity 
          style = {styles.trickButton}
          //  color={'#16a085'} marginTop= '90' fontSize = '200'
          onPress={this.combinedJump.bind(this)} >
            <Text style = {styles.trickButton}>New Trick</Text>
          </TouchableOpacity>
        </View>
          <Slider 
              style={{ width: 200, height: 90, borderRadius: 100}}
              minimumValue={0}
              maximumValue={1}
              value={this.state.sliderValue}
              onValueChange={(value)=> this.setState({ sliderValue: value})}
              //onValueChange={this.diffRender.bind(this)}
              onSlidingComplete={this.diffRender.bind(this)}
              maximumTrackTintColor='grey'  
              minimumTrackTintColor='#D93833'
              step={.5}>
              {/* <Input type="range" min={0} max = {255} value={this.state.value} className = "slider" onChange = {this.handleonChange}/> */}
            </Slider>
            <View style="value"><Text style = {styles.diffBox} >{this.state.difficulty}</Text></View>
            <Text style = {styles.grabOnlyMode} >Grab Only Mode: {this.state.switchValue ? 'on' : 'off'}</Text>
            <Switch
              
              style={styles.switchContainer}
              trackColor={{true:'#D93833'}}
              value={this.state.switchValue}
              onValueChange={(switchValue) => this.setState({switchValue})}
              //onValueChange={toggleSwitch}
              //value = {isEnabled}
              //make it so that the state is updated as soon as switch is toggled
              //execute this.grabOrNoGrab();

              
            ></Switch>
            
            
      </View>
    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Rails: Rails,
  Jumps: Jumps,
},{
  tabBarOptions:{
    activeTintColor:'#D93833',
    inactiveTintColor:'grey',
    fontSize: 30,
    
  },
  
  
})
export default createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#108237',
    marginBottom: 5,
  },
  trickButton: {
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#263556',
    fontSize: 40,
    margin: 20,
    marginLeft: 30,
    marginRight: 30
  },
  trickBox: {
    color: '#263556',
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Noteworthy-Bold',
    letterSpacing : 1.5
  },
  diffBox: {
    color: '#263556',
    fontSize: 40
  },
  grabOnlyMode: {
    marginTop: 20,
    color: '#263556',
    fontSize: 20
  },
  switchContainer: {
    alignContent: 'center',
    textAlign: 'center',
    width: 90, height: 40, borderRadius: 100,
    marginLeft: 30,
    marginTop: 15
  }
});
