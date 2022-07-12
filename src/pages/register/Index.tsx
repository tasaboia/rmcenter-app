import React from 'react'
import { Box, Button , Center, Divider, Heading, HStack, Icon, Image, Input, NativeBaseProvider, Stack, Text} from 'native-base'
import AntDesign from '@expo/vector-icons/AntDesign'
import { FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Auth, registerUser } from '../../service/Auth';
import { IRegisterInput } from '../../service/Auth/type';
import { Link } from '@react-navigation/native';
import { useMutation } from 'react-query';

const initialValues = {
  name: '',
  email:'',
  password:'',
  passwordConfirmation: '',
}
const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Digite sua senha'),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas não são iguais')
});

const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};



export default function Register({ navigation }: any) {
const [show, setShow] = React.useState(false);
  
const mutation = useMutation(registerUser, {
  onSuccess: () => {
      navigation.navigate("Login");
      
  }
})

const InputCustom = (props: Record<string, any>) => {
    return <Input borderRadius={10} maxH={10} my={1}  variant="unstyled" color="#DD6B01" bgColor="#FFF"  {...props}/>
}
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={async values => {
        try{
          const input: IRegisterInput = {
            user_name: values.name,
            email: values.email,
            password: values.password,
            name: values.name,
            is_active: true,
          }

          const response = mutation.mutate(input)
          console.log(response)
        }catch(err){
          console.log(err)
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
      <NativeBaseProvider config={config}>
      <Stack space={2} flex={1} padding={10} bg={{
        linearGradient: {
          colors: ["#83C6A6", "#F9E385"],
          start: [0,1],
          end: [0, 0]
        }
      }}>
          <Image mb={5} alt='logo' alignSelf="center" height={200} width={250} source={require("../../../assets/logo-title.png")}/>

          <Center display={{ sm: "flex"}}  flex={2} >

              <InputCustom 
                w={240}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Digite seu nome"
                
              />
              <InputCustom
               w={240}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Digite seu e-mail"
               
              />
              <HStack space={1} >
                <InputCustom 
                  maxW={120}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Senha' type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} mr="2" color="muted.400" onPress={() => setShow(!show)} />} />
                <InputCustom 
                 maxW={120} 
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  value={values.passwordConfirmation}
                  placeholder='Repita a senha' type={show ? "text" : "password"} InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} mr="2" color="muted.400" onPress={() => setShow(!show)} />} />
              </HStack>
              <Button
                onPress={() => handleSubmit ()}
                borderRadius={5}
                w={240}
                my={2} alignSelf={{sm:"center"}}  _hover={{color: '#5E8372'}} _pressed={{color: '#5E8372'}} bgColor="#77A48F"> Cadastrar </Button>
              
             
          </Center>
          <HStack justifyItems="flex-end" justifyContent="center" space={1}>
                  <Text>Já tem uma conta? </Text>
                  <Link to={{ screen: 'Login'}}>Entrar</Link>
              </HStack>
      </Stack>
      </NativeBaseProvider>
      )}
    </Formik>
    )
}

