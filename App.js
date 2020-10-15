import React, { Component } from 'react';
import {Dimensions, View, StatusBar} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Initial from './src/data/Initial';

const LoadingScreen = require("./src/modules/loading/screen/loadingscreen").default;
const MainScreen = require("./src/modules/main/screen/MainScreen").default;
const colors = require('./src/color/Colors').default


console.disableYellowBox = true

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 180});

const setLoadingToTrue = function(component){
  component.setState((state)=>{
    return {loading: state}
  });
}

class App extends Component {
  state= {
    loading: true
  }
  componentWillMount(){
      var self = this;
      Initial.initAll(()=>{
        setLoadingToTrue(self);
      });
  }
  render(){
    if (this.state.loading == true)
        return (
          <LoadingScreen/>
        )
    else
        return (
          <SafeAreaProvider style={{flex: 1}}>
            <StatusBar
              translucent
              barStyle="light-content"
              //  backgroundColor="rgba(0, 0, 0, 0.251)"
              backgroundColor={colors.theme}
            />
            <SafeAreaView style={{flex:1, width: "100%", height: "100%"}}>
              {<MainScreen/>}
            </SafeAreaView>
            
          </SafeAreaProvider>
          
        )
  }
}

export default App;
