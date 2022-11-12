import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
  return(
    <View style={styles.listItem}>
    <Text  style={styles.text}> {props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#106d78',
    borderRadius: 20,
    width: 220,
    fontFamily: 'Times New Roman',
    textAlign: 'center',
  },
  text:{
    color: '#f3fdfd',
    fontSize: 14
  }
});

export default GoalItem;