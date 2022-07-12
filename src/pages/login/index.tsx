import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import UITextInput from '../../components/UITextInput';
import UIButton from '../../components/UIButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@react-navigation/native';
import { useAuth } from '../../context';

const initialValues = {
  email:'',
  password:'',
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

export default function Login() {
  const {login, user} = useAuth() 
  return (
  <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={async values => {
      try{
        const resp = login(values.email, values.password)
      }catch(err){
        console.log(err)
      }
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
    <>
    <View style={styles.container}>
      <LinearGradient
        colors={ ["#83C6A6", "#F9E385"]}
        start ={[0,1]}
        end = {[0, 0]}
        style={styles.background}
      />
      <Image style={styles.logo} source={require('../images/logoTransparent.png')}/>

    
      <TextInput 
        style={ errors.email ? styles.inputError : styles.input}
        placeholder='Digite seu e-mail' 
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        value={values.email}
      />

      <TextInput 
        style={ errors.password ? styles.inputError : styles.input}
        placeholder='Digite sua senha'
        secureTextEntry={true} 
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      <Link style={styles.linkPassword} to={{ screen: 'ForgotPassword' }}>Esqueceu sua senha?</Link>
      <UIButton title='Entrar' onPress={handleSubmit}/>
      <Link to={{screen: 'Register'}} style={styles.link}>Ainda não tem uma conta?</Link>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footer}>

    <Text >Entrar usando</Text>

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
  linkPassword: {
    marginLeft:10, 
    color: '#535D66', 
    alignSelf: 'flex-start',
    marginStart: 80
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
