import React from 'react';
import {StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Empty from './components/Empty';

function App() {
  const today = new Date();
  //console.log(today);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;
