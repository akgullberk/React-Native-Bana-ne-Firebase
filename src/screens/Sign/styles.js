import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        
    },
    header:{
        color: 'green',
        margin: windowHeight * 0.02,
        fontSize: windowHeight * 0.2
    }
})