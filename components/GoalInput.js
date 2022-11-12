import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button
        title="ADD"
        onPress={props.onAddGoal.bind(this, enteredGoal)}
        color='#106d78'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: '#106d78',
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    textAlign: 'center',
    color: '#106d78',
    fontFamily: 'Courier',
    fontSize: 16
  },
  btn: {
    color:'#106d78',
    borderRadius: 10,
  }
});

export default GoalInput;
