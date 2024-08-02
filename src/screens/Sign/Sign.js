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
  repassword: '',
}

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false)
  function handleLogin() {
    navigation.goBack()
  }

  async function handleFormSubmit(formValues) {
    if(formValues.password !== formValues.repassword) {
      showMessage({
        message: "Passwords don't match",
        type: "danger",
      });
    }
    else{
      try {
        await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.repassword);
        showMessage({
          message: "Sign Up Successful",
          type: "success",
        });
        navigation.navigate('Login')
        setLoading(false)
      } catch (error) {
        showMessage({
          message: error.code,
          type: "danger",
        });
        setLoading(false)
      }
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

        <Input 
          value={values.repassword}
          onType={handleChange('repassword')} 
          placeholder="Repeat Password" />

        <Button buttonName="Sign Up" loading={loading} onPress={handleSubmit}/>

          </>
          )}
        </Formik>
        <Button buttonName="Back" theme="secondary" onPress={handleLogin}/>
        
      
    </View>
  )
}

export default Sign