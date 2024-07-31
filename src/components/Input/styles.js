import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    container:{
        backgroundColor: 'gray',
        width: windowWidth * 0.9,
        height: windowHeight * 0.045,
        borderRadius: windowHeight * 0.01,
        margin: windowHeight * 0.015
    },

    input:{
        
    }
})