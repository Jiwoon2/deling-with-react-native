import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useContext} from 'react/cjs/react.production.min';
import LogContext from '../contexts/LogContext';

function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요."
        style={styles.input}
      />
      {/* <Box>{value => <Text>{value}</Text>}</Box> */}
      {/* <Box>
        <Text>1</Text>
      </Box>
      <Box>
        <Text>2</Text>
      </Box>
      <Box>
        <Text>3</Text>
      </Box> */}
    </View>
  );
}

// function Box({children}) {
//   return <View style={styles.box}>{children('Hello')}</View>;
// }

const styles = StyleSheet.create({
  box: {
    borderWidth: 2,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
