import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    header:{
        backgroundColor: 'white',
        width: windowWidth * 1,
        height: windowHeight * 0.05,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    
    logout:{
        marginRight:windowHeight * 0.02,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    }
})