import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {Input,Button} from '../../components'
import { Formik } from 'formik'

const initialFormValues={
  usermail: '',
  password: '',
}

const Login = ({navigation}) => {

  function handleSignUp() {
    navigation.navigate('Sign')
  }

  function handleFormSubmit(formValues) {
    console.log(formValues)
    
  }

  return (
    <View style={styles.container}>
        <Text style={styles.header}>bana ne?</Text>
        <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
          {({values,handleChange,handleSubmit}) =>(
          <>
          
          <Input 
           value={values.usermail}
           onType={handleChange('usermail')}
           placeholder="Email" />

          <Input 
          value={values.password}
          onType={handleChange('password')} 
          placeholder="Password" />

          <Button buttonName="Login" onPress={handleSubmit}/>
          </>
          )}
        </Formik>
        
        <Button buttonName="Sign Up" theme="secondary" onPress={handleSignUp}/>
        
      
    </View>
  )
}

export default Login