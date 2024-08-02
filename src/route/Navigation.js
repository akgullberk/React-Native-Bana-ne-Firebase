import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Sign} from "../screens";


const Stack = createNativeStackNavigator();

const Navigation = () => {

    const AuthStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign" component={Sign} />
            </Stack.Navigator>
        )
    }

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
        </Stack.Navigator >
        
        
    )
}

export default Navigation