import {FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { FloatingButton, Modal } from '../../components'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

const Messages = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [contentList, setContentList] = useState([])

  useEffect(() => {
    database()
    .ref('messages/')
    .on("value",snapshot =>{
      const contentData = snapshot.val();
      console.log(contentData)
    });
  }, [])
  

  const handleToggle = () => {
    setModalVisible(!modalVisible)
  }

  const handleSendContent = (content) => {
    handleToggle()
    sendContent(content)
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email
      const contentObject = {
        text: content,
        username: userMail.split("@")[0],
        date: new Date().toISOString()
      };

      database().ref('messages/').push(contentObject)
  }

  return (
    <View>
      <FlatList

      />
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
