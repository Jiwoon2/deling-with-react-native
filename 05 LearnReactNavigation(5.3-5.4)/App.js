import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

//const Drawer = createDrawerNavigator();
//const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function SettingScreen({navigation}) {
//   return (
//     <View>
//       <Text>Setting</Text>
//       <Button title="뒤로가기" onPress={() => navigation.goBack()} />
//     </View>
//   );
// }

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메세지',
  };
  return nameMap[routeName];
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={({route}) => ({title: getHeaderTitle(route)})}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // createDrawerNavigator();
    // <NavigationContainer>
    //   <Drawer.Navigator
    //     initialRouteName="Home"
    //     drawerPosition="left"
    //     backBehavior="history"
    //     screenOptions={{headerShown: false}}
    //     drawerContent={({navigation}) => (
    //       <SafeAreaView>
    //         <Text> A Custom Drawer</Text>
    //         <Button
    //           onPress={() => navigation.closeDrawer()} //현재 보여지는 드로어를 닫아줌
    //           title="Drawer 닫기"
    //         />
    //       </SafeAreaView>
    //     )}>
    //     {/* screenOptions={{
    //       drawerActiveBackgroundColor: '#fb8c00',
    //       drawerActiveTintColor: 'white',
    //     }}> */}
    //     <Drawer.Screen
    //       name="Home"
    //       component={HomeScreen}
    //       options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
    //     />
    //     <Drawer.Screen
    //       name="Setting"
    //       component={SettingScreen}
    //       options={{title: '설정'}}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
}

export default App;
