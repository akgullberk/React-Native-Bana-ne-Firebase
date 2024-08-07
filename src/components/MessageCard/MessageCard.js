import {Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import {formatDistance,parseISO} from 'date-fns'

const MessageCard = ({message,onBanane}) => {
    const formattedDate = formatDistance(parseISO(message.date), new Date(),
     {addSuffix: true
     })

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.title}>{message.text}</Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
            {!!message.dislike && (
              <View style={styles.dislike_count_container}>
                <Text style={styles.dislike_count_text}>{message.dislike}</Text>
              </View>
            )}
            <Text style={styles.dislike_text}>bana ne?</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default MessageCard