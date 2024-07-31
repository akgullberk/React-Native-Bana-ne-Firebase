import {Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
const Input = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.Input} placeholder={placeholder} />
    </View>
  )
}

export default Input