import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@react-navigation/native';
import UITextInput from '../../components/UITextInput';
import UIButton from '../../components/UIButton';

const initialValues = {
    name: '',
    email:'',
    password:'',
}
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

export default function Register({navigation}) {
  return (
  <Formik
    initialValues={initialValues}
    validationSchema={RegisterSchema}
    onSubmit={async values => {
      try{
        console.log("Successful")
        navigation.navigate('Successful')
      }catch(err){
        console.log(err)
      }
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values , errors, touched}) => (
    <>
    <View style={styles.container}>
      <LinearGradient
        colors={ ["#83C6A6", "#F9E385"]}
        start ={[0,1]}
        end = {[0, 0]}
        style={styles.background}
      />
      <Image style={styles.logo} source={require('../images/logoTransparent.png')}/>

      <Text style={styles.title}>Criar sua conta</Text>
      <TextInput
        style={ errors.name ? styles.inputError : styles.input} 
        placeholderTextColor= '#102A41'
        placeholder='Digite seu nome' 
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        value={values.name}
        />
      <TextInput 
        style={ errors.email ? styles.inputError : styles.input}
        placeholderTextColor= '#102A41'
        placeholder='Digite seu e-mail' 
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
        />

      <TextInput
        style={ errors.password ? styles.inputError : styles.input}
        placeholderTextColor= '#102A41'
        placeholder='Digite sua senha'
        secureTextEntry={true} 
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      <UIButton title='Cadastrar' onPress={handleSubmit}/>
      <Link to={{screen: 'Login'}} style={styles.link}>Já tem uma conta? Entrar </Link>
      <StatusBar style="auto" />
    </View>
   
    </>)}
  </Formik>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83C6A6',
    alignItems: 'center',
  },
  title: {
    color: '#53866E',
     alignSelf: 'flex-start',
      marginStart: 80, 
      fontSize: 18, 
      margin: 2
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 150,
    marginBottom: 20,
  },
  footer:{
    backgroundColor: '#83C6A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcons: {
    backgroundColor: '#83C6A6',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon:{
    width:20,
    height:20,
    alignSelf: 'center',
    marginTop:10
  },
  iconBackground:{
    width:40,
    height:40,
    backgroundColor: '#7EAE99',
    borderRadius: 10,
    margin:3,
    marginBottom: 30
  },
  link: {
    alignSelf: "center",
    marginTop: 10, 
    color: '#535D66'
  },
  input: {
    height: 40,
    width: '60%',
    minWidth: 150,
    maxHeight: 350,
    margin: 4,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    },
inputError: {
    height: 40,
    width: '60%',
    minWidth: 150,
    maxHeight: 350,
    margin: 4,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 1,
    }
});
