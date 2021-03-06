import React, {useRef} from 'react';
import {StyleSheet, Button, Animated, View} from 'react-native';

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current;

  return (
    <View>
      <Animated.View
        style={[
          styles.rectangle,
          {
            opacity: animation,
          },
        ]}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      />
    </View>
  );
}

function CalendarScreen() {
  return (
    <View style={styles.block}>
      <FadeInAndOut />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},

  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
