import React, { Component, useState } from 'react';
import { View, StyleSheet, StatusBar, Button, TextInput, Image, SafeAreaView } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const HomeScreenComponent = require("../../home/screen/HomeScreen").default;
const MainLogInComponent = require("../../logInMain/screen/LogInScreen").default;
const ProfileComponent = require("../../profile/screen/Profile").default
const CommentComponent = require("../../comment/screen/Comment").default

const colors = require("../../../color/Colors").default;

class App extends Component{
    render(){
        return (
        //<SafeAreaView style={{flex: 1, backgroundColor: colors.headerBar}}>
            // <View style={{position: "absolute", width: "100%", height: "50%", bottom: 0, backgroundColor: "#fff"}}/>
            <View style={{width: "100%", height: "100%", flex: 1, backgroundColor:" cyan"}}>
                
          <NavigationContainer>
            <Stack.Navigator mode="modal" headerMode="none">
              <Stack.Screen
                name="MainLogin"
                component={MainLogin}
                navigationOptions={{
                  tabBarVisible: false,
                }}
                // options = { {title: "Màn hình chính"} }
              />
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                // options = { {title: "Màn hình đăng nhập"} }
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
              />
              <Stack.Screen
                name="Comment"
                component={Comment}
              />
            </Stack.Navigator>
          </NavigationContainer>
          </View>
        //</SafeAreaView> 
        );
        
    }
};


function HomeScreen({ route, navigation }){
    global.navigation = navigation
    return (
        <View style={styles.fullScreen}>
            <HomeScreenComponent route={route} navigation={navigation}></HomeScreenComponent>
        </View>
    )
};

function MainLogin({route, navigation}){
    global.navigation = navigation
    return (
        <View style={styles.fullScreen}>
            <MainLogInComponent route={route} navigation={navigation}></MainLogInComponent>
        </View>
    )
}

function Profile({route, navigation}){
    global.navigation = navigation
    return (
        <View style={[styles.fullScreen]}>
            <ProfileComponent route={route} navigation={navigation}></ProfileComponent>
        </View>
    )
}

function Comment({route, navigation}){
    global.navigation = navigation
    return (
        <View style={[styles.fullScreen]}>
            <CommentComponent route={route} navigation={navigation}></CommentComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redScreen: {
        backgroundColor: 'red'
    },
    blueScreen: {
        backgroundColor: 'blue'
    }
});

const mapStateToProps = (state)=>{
    return {
        logedIn: state.logedIn
    }
}

export default App;


const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };