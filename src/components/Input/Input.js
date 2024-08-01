import {Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
const Input = ({placeholder,value,onType}) => {
  return (
    <View style={styles.container} >
      <TextInput 
      style={styles.Input} 
      placeholder={placeholder}
      onChangeText={onType} 
      value={value} />
    </View>
  )
}

export default Input