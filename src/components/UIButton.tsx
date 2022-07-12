import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableHighlight } from 'react-native';

export interface IButtonProps {
    title: string,
    onPress: () => void
}
export default function UIButton(props : IButtonProps) {
  const { onPress, title } = props;
  return (
    <TouchableHighlight onPress={onPress}  style={styles.button} underlayColor="#5E8372">
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#77A48F',
    marginTop: 20,
    marginHorizontal:10
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});