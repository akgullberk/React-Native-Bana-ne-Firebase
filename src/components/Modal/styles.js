import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        padding:10,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        height: windowHeight * 0.3,
        alignItems: 'center',

        marginHorizontal:10
    },
    modal:{
        justifyContent: 'flex-end',
        margin:0
    },
    ınput:{
        flex:1,
        width: windowWidth * 0.9,
        textAlignVertical: 'top',
    },
    
})