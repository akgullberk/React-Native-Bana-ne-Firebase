import { Dimensions, StyleSheet} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const base_style = StyleSheet.create({
    container:{
        
        width: windowWidth * 0.9,
        height: windowHeight * 0.045,
        borderRadius: windowHeight * 0.01,
        margin: windowHeight * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: windowHeight * 0.025,
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: 'green',
        },
        text:{
            ...base_style.text,
            color: 'white',
        },
        
    }),

    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'green',
        },

        text:{
            ...base_style.text,
            color: 'green',
        },
    }),
}