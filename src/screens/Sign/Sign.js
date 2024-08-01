import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {Input,Button} from '../../components'
import { Formik } from 'formik'

const initialFormValues={
  usermail: '',
  password: '',
  repassword: '',
}

const Sign = ({navigation}) => {
  function handleLogin() {
    navigation.goBack()
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

        <Input 
          value={values.repassword}
          onType={handleChange('repassword')} 
          placeholder="Repeat Password" />

        <Button buttonName="Sign Up" onPress={handleSubmit}/>

          </>
          )}
        </Formik>
        <Button buttonName="Back" theme="secondary" onPress={handleLogin}/>
        
      
    </View>
  )
}

export default Sign