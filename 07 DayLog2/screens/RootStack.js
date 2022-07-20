import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './Maintab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}} //헤더 중첩 방지
      />
      <Stack.Screen
        name="Write"
        component={WriteScreen}
        options={{headerShown: false}} //헤더 숨기기
      />
    </Stack.Navigator>
  );
}

export default RootStack;
