import {Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ModalButton } from '../'
import  Modal  from 'react-native-modal'

const InputModal = ({visible,onClose,onSend}) => {
    const [text, setText] = useState(null)

    const handleSend = () => {
      if(!text){
        return;
      }

      onSend(text)
      setText(null)
    }

  return (
    <Modal 
     style={styles.modal}
     isVisible={visible}
     onSwipeComplete={onClose} 
     onBackdropPress={onClose} 
     onBackButtonPress={onClose}
     
     >
      <View style={styles.container}>
        <TextInput 
        style={styles.ınput} 
        placeholder='Hızlı ol satranç mı oynuyoruz?'
        onChangeText={setText}
        multiline
        
        />
        <ModalButton buttonName="Gönder" onPress={handleSend} />
      </View>
    </Modal>
    
  )
}

export default InputModal
