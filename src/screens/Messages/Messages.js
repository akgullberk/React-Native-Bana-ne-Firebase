import {FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { FloatingButton, Modal,MessageCard,Button } from '../../components'
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

      const parsedData = parseContentData(contentData || {})
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
        date: new Date().toISOString(),
        dislike:0,
        
      };

      database().ref('messages/').push(contentObject)
  }

  const handleBanane = (item) => {
    database()
    .ref(`messages/${item.id}/`)
    .update({dislike: item.dislike + 1})
    
  }

  const renderContent = ({item}) => 
  <MessageCard message={item} 
  onBanane={() => handleBanane(item)} 
  />

  return (
    <View style={styles.container}>
      
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
