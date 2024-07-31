import {Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {Input} from '../../components'
import Button from '../../components/Button/Button'
const Login = () => {
  return (
    <View style={styles.container}>
      
        <Input placeholder="Email" />
        <Input placeholder="Password" />

        <Button buttonName="Login"/>
        <Button buttonName="Sign Up" theme="secondary"/>
      
    </View>
  )
}

export default Login