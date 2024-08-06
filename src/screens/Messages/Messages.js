import {FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { FloatingButton, Modal,MessageCard } from '../../components'
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

      if (!contentData) {
        return
      }
      const parsedData = parseContentData(contentData)
      setContentList(parsedData)
    });
  }, [])

  const parseContentData = (data) => {
    return Object.keys(data).map(key => {
      return {
        id: key,
        ...data[key]
      }
    })
  }
  

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

  const renderContent = ({item}) => <MessageCard message={item} />

  return (
    <View>
      <FlatList
        data={contentList}
        renderItem={renderContent}
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
