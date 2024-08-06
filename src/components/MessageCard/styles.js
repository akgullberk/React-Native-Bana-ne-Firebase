import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'green',
        borderRadius: windowHeight * 0.01,
        margin: windowHeight * 0.015,
        padding: windowHeight * 0.01,
        
    },
    inner_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    user:{
        fontSize: windowHeight * 0.016,
        color: 'white',
        fontWeight: '400',
        
    },
    date:{
        fontSize: windowHeight * 0.016,
        fontStyle: 'italic',
        
        color: 'white',
        
    },
    title:{
        fontSize: windowHeight * 0.03,
        color: 'white',
        marginTop: windowHeight * 0.01,
        
    }
})