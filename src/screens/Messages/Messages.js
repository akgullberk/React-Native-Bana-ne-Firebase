import {Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { FloatingButton, Modal } from '../../components'

const Messages = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const handleToggle = () => {
    setModalVisible(!modalVisible)
  }

  const handleSendContent = (content) => {
    handleToggle()
    console.log(content)
  }

  return (
    <View>
      <FloatingButton onPress={handleToggle} />
      <Modal 
        visible={modalVisible} 
        onClose={handleToggle} 
        onSend={handleSendContent}
      />
    </View>
  )
}

export default Messages
