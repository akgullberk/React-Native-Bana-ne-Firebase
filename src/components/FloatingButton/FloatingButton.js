import {TouchableOpacity} from 'react-native'
import React from 'react'
import { styles } from './styles'

const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

    </TouchableOpacity>
  )
}

export default FloatingButton
