import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

function WriteEditor({title, body, onChangeTitle, onChangeBody}) {
  const bodyRef = useRef();

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="제목을 입력하세요"
        style={styles.titleInput}
        returnKeyType="next"
        onChangeTitle={onChangeTitle}
        value={title}
      />
      <TextInput
        placeholder="당신의 오늘을 기록해보세요"
        style={styles.bodyInput}
        multiline
        textAlignVertical="top"
        onChangeTitle={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16,
    color: '#263238',
  },
});

export default WriteEditor;
