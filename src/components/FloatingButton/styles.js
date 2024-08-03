import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: windowHeight * 0.88,
        right:20,
        borderRadius:50,
        width:60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    }
})