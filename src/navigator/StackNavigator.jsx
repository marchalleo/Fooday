import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/auth/LoginScreen';
import { RegisterScreen } from '../screen/auth/RegisterScreen'
import { UserScreen } from '../screen/UserScreen'
import { MapScreen } from '../screen/MapScreen'
import { ListScreen } from '../screen/ListScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginContext } from '../context/context';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

export function StackNavigator() {

    const {login, setLogin} = useContext(LoginContext);

    const Tab = createBottomTabNavigator();

    return (
        <>
        {login ? (
            //si le login est true, alors on retourne les screen suivants
            <Tab.Navigator initialRouteName="Map">
                    <Stack.Screen name="List" component={ListScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="User" component={UserScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
            ) : (
            //sinon on retourne sur la page login
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerTransparent: true, headerTitle: '', headerBackTitleVisible: false}}/>
            </Stack.Navigator>
        )}
        </>
    )
}