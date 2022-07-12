import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from '@react-navigation/native';

export default function Activated()  {
  return (
    <>
    <View style={styles.container}>
      <LinearGradient
        colors={ ["#83C6A6", "#F9E385"]}
        start ={[0,1]}
        end = {[0, 0]}
        style={styles.background}
      />
    <Image style={styles.logo} source={require('../../images/logoTransparent.png')}/>

    <Image source={require('../../images/sucesso-icon.png')}/>
    <Text style={styles.title} >Sua conta foi ativada com sucesso</Text>
    <Link style={styles.description} to={{ screen: 'Login'}}> Click aqui e faça Login</Link>
    <StatusBar style="auto" />
  </View>
  </>
  )}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#83C6A6',
  alignItems: 'center',
  padding: 20,
},
logo: {
  width: 80,
  height: 80,
  alignSelf: "center",
  marginTop: 200,
  marginBottom: 60,
},
background: {
  zIndex: -1,
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: 500,
},
title: {
  color: '#0E283F',
  fontSize: 20,
  fontWeight: "bold",
  margin: 6
},
description: {
  color: '#384D43',
  fontSize: 18
}
});