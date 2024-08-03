import {Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import {Input,Button} from '../../components'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'
import { showMessage} from "react-native-flash-message";

const initialFormValues={
  usermail: '',
  password: '',
}

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false)

  function handleSignUp() {
    navigation.navigate('Sign')
  }

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true)
      await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
      navigation.navigate('Messages')
    } catch (error) {
      console.log(error)
      showMessage({
        message: error.code,
        type: "danger",
      });
      setLoading(false)
      
    }
    
    
    
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

          <Button buttonName="Login" onPress={handleSubmit} loading={loading}/>
          </>
          )}
        </Formik>
        
        <Button buttonName="Sign Up" theme="secondary" onPress={handleSignUp}/>
        
      
    </View>
  )
}

export default Login