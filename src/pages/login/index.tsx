import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from '@react-navigation/native';
import {StyleSheet , Text, View, Image } from 'react-native';

import { useMutation } from 'react-query';

import { LinearGradient } from 'expo-linear-gradient';
import { Auth } from '../../service/Auth';
import UIButton from '../../components/UIbutton';
import UITextInput from '../../components/UITextInput';
import { useAuth } from '../../context';
import { SaveStorage } from '../../service/storage/storage';

const initialValues = {
  email:'',
  password:'',
}
const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};
export default function Login({navigation}: any) {
  const {login, user} = useAuth() 
  const mutation = useMutation(Auth, {
    onSuccess: () => {
      }
  })

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
    {({ handleChange, handleBlur, handleSubmit, values }) => (
        <LinearGradient
        // Background Linear Gradient
          colors={ ["#83C6A6", "#F9E385"]}
          start ={[0,1]}
          end = {[0, 0]}
          style={styles.background}
      >
        <Image 
            style={styles.logo}
            source={require("../../../assets/logo-transparent.png")} />
        <View style={styles.container}>

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

            <Link style={{marginLeft:10, color: '#535D66'}} to={{ screen: 'ForgotPassword' }}>Esqueceu sua senha?</Link>

             <UIButton title={"Entrar"} onPress={handleSubmit}/> 
            <Link style={{alignSelf: "center", marginTop: 10, color: '#535D66'}} to={{ screen: 'Register' }}>Ainda não tem uma conta?</Link>
        </View>
        <Text style={{alignSelf: 'center'}}>Entrar usando</Text>
        <View style={styles.footer}>
          <View style={styles.iconBackground}>
            <Image 
              style={{
                width:40,
                height:40,
                alignSelf: 'center',
                }}
              source={require("../../images/Facebook-icon.png")} />
          </View>
          <View style={styles.iconBackground}>
            <Image 
              style={styles.icon}
              source={require("../../images/Google-icon.png")} />
          </View>
        </View>
      </LinearGradient>
     )}
     </Formik>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 65
  },
  background: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100vh",
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
  },
  footer: {
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
  }
});

