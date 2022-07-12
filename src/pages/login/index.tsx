import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import UITextInput from '../../components/UITextInput';
import UIButton from '../../components/UIButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@react-navigation/native';

const initialValues = {
  email:'',
  password:'',
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

export default function Login() {
  return (
  <Formik
    initialValues={initialValues}
    validationSchema={SignupSchema}
    onSubmit={async values => {
      try{
        console.log("aqui")
      }catch(err){
        console.log(err)
      }
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <>
    <View style={styles.container}>
      <LinearGradient
        colors={ ["#83C6A6", "#F9E385"]}
        start ={[0,1]}
        end = {[0, 0]}
        style={styles.background}
      />
      <View>
        <Image style={styles.logo} source={require('./images/logoTransparent.png')}/>
      </View>
      <UITextInput 
            placeholder='Digite seu e-mail' 
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />

      <UITextInput 
        placeholder='Digite sua senha'
        secureTextEntry={true} 
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      <Link style={{marginLeft:10, color: '#535D66', alignSelf: 'flex-start', marginStart: 80 }} to={{ screen: 'ForgotPassword' }}>Esqueceu sua senha?</Link>
      <UIButton title='Entrar' onPress={handleSubmit}/>
      <Link style={styles.link} to={{ screen: 'Register' }}>Ainda não tem uma conta?</Link>
      <StatusBar style="auto" />
    </View>
    <View style={styles.footer}>

    <Text >Entrar usando</Text>

      <View style={styles.footerIcons}>
        <View style={styles.iconBackground}>
          <Image 
            style={{
              width:40,
              height:40,
              alignSelf: 'center',
              }}
              source={require("./images/Facebook-icon.png")} />
        </View>
        <View style={styles.iconBackground}>
          <Image 
            style={styles.icon}
            source={require("./images/Google-icon.png")} />
        </View>
      </View>
    </View>

    </>)}
  </Formik>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83C6A6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
  logo: {
    width: 110,
    height: 100,
    alignSelf: "center",
    marginTop: 100,
    margin: 30,
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
  }
});
