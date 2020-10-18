import React, { Component, useState } from 'react';
import { View, StyleSheet, StatusBar, Button, TextInput, Image, SafeAreaView } from 'react-native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const HomeScreenComponent = require("../../home/screen/HomeScreen").default;
const MainLogInComponent = require("../../logInMain/screen/LogInScreen").default;
const GetInfoLogInComponent = require("../../logInGetInfo/screen/GetInfoLogInScreen").default;
const ForgetPasswordComponent = require("../../logInForgetPassword/screen/ForgetPasswordScreen").default;
const ChildrenTrackingComponent = require("../../childrenTracking/screen/ChildrenTracking").default;
const ReportAbsenceComponent = require("../../reportAbsence/screen/ReportAbsence").default;
const RegisterServiceComponent = require("../../registerService/screen/RegisterServiceComponent").default;
const ChangeServiceComponent = require("../../changeService/screen/ChangeServiceComponent").default;
const RegisterGuardiansComponent = require("../../registerGuardians/screen/RegisterGuardians").default;

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
                name="GetInfoLogin"
                component={GetInfoLogin}
                // options = { {title: "Màn hình lấy thông tin đăng nhập"} }
              />
              <Stack.Screen
                name="FogetPassword"
                component={ForgetPassword}
                // options = { {title: "Màn hình quên mật khẩu"} }
              />
              <Stack.Screen
                name="ChildrenTracking"
                component={ChildrenTracking}
              />
              <Stack.Screen
                name="ReportAbsence"
                component={ReportAbsence}
              />
              <Stack.Screen
                name="RegisterService"
                component={RegisterService}
              />
              <Stack.Screen
                name="ChangeService"
                component={ChangeService}
              />
              <Stack.Screen
                name="RegisterGuardians"
                component={RegisterGuardians}
              />
            </Stack.Navigator>
          </NavigationContainer>
          </View>
        //</SafeAreaView> 
        );
        
    }
};


function HomeScreen({ route, navigation }){
    return (
        <View style={styles.fullScreen}>
            <HomeScreenComponent route={route} navigation={navigation}></HomeScreenComponent>
        </View>
    )
};

function MainLogin({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <MainLogInComponent route={route} navigation={navigation}></MainLogInComponent>
        </View>
    )
}

function GetInfoLogin({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <GetInfoLogInComponent route={route} navigation={navigation}></GetInfoLogInComponent>
        </View>
    )
}

function ForgetPassword({route, navigation}){
    return (
        <View style={styles.fullScreen}>
            <ForgetPasswordComponent route={route} navigation={navigation}></ForgetPasswordComponent>
        </View>
    )
}

function ChildrenTracking({route, navigation}){
   return (
        <View style={styles.fullScreen}>
            <ChildrenTrackingComponent route={route} navigation={navigation}></ChildrenTrackingComponent>
        </View>
    )
}

function ReportAbsence({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <ReportAbsenceComponent route={route} navigation={navigation}></ReportAbsenceComponent>
        </View>
    )
}

function RegisterService({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <RegisterServiceComponent route={route} navigation={navigation}></RegisterServiceComponent>
        </View>
    )
}

function ChangeService({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <ChangeServiceComponent route={route} navigation={navigation}></ChangeServiceComponent>
        </View>
    )
}

function RegisterGuardians({route, navigation}){
    return (
        <View style={[styles.fullScreen]}>
            <RegisterGuardiansComponent route={route} navigation={navigation}></RegisterGuardiansComponent>
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