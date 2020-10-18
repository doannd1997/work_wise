import React, {Component} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Badge } from 'native-base';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Provider } from "react-redux";
import store from '../redux/Redux';

const colors = require("../../../color/Colors").default;
const styles = require("../style/styles").default;

const HomeComponent = require("../../mainTabs/home/screen/HomeTab").default;
const HistoryComponent = require("../../mainTabs/history/screen/History").default;
const MailComponent = require("../../mainTabs/mail/screen/Mail").default;
const AccountComponent = require("../../mainTabs/account/screen/ScreenAccount").default;

function Home(props) {
  return (
    <HomeComponent {...props} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </HomeComponent>
  );
}

function Folowing() {
  return (
    <HistoryComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </HistoryComponent>
  );
}

function Mail() {
  return (
    <MailComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </MailComponent>
  );
}

function Account() {
    return (
      <AccountComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </AccountComponent>
    );
  }

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
    render(){
      const tab_name_home = global.localization.getLang("lang_tab_home")
      const tab_name_history = global.localization.getLang("lang_tab_history")
      const tab_name_mail = global.localization.getLang("lang_tab_mail")
      const tab_name_account = global.localization.getLang("lang_tab_account")

      var params = this.props.route.params;
      if (typeof params == 'object'){
        if (params.logedIn === true){
          var accountData = global.accountData.getBatch();
          var studentList = global.routeData.getTrackingBatch();

          store.dispatch({type: "LOG_IN", ...accountData, studentList: studentList});
        }
        if (params.logedIn === false){
          store.dispatch({type: "LOG_OUT"});
        };
        delete this.props.route.params;
      }

      return (
        <Provider store={store}>
          <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: colors.tabTintColor,
              allowFontScaling: true,
              labelStyle: styles.tabLbl,
              style: styles.tabBar,
            }}
            >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: global.localization.getLang("lang_feed"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="columns" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Folowing"
              component={Folowing}
              options={{
                tabBarLabel: global.localization.getLang("lang_following"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="store" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Mail"
              component={Mail}
              options={{
                tabBarLabel: global.localization.getLang("lang_tab_mail"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="inbox" size={size} color={color}>
                      {/* {getNumBadge(store)} */}
                  </Icon>
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: global.localization.getLang("lang_profile"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="address-card" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
        </Provider>
      );
    }   
}

getNumBadge = (store)=>{
  var numNew = store.getState().mail_inbox.filter((item)=>item.isNew).length;
  return (
    numNew > 0 ?
    <Text style={styles.bagdeMail}>
      {numNew}
    </Text>
    : null
  )
}