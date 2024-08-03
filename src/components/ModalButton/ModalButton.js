import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import  {styles}  from './styles'

const ModalButton = ({buttonName,onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{buttonName}</Text>

    </TouchableOpacity>
  )
}

export default ModalButton