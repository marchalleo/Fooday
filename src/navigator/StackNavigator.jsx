import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/login/LoginScreen';
import { RegisterScreen } from '../screen/register/RegisterScreen'
import { UserScreen } from '../screen/user/UserScreen'
import { MapScreen } from '../screen/map/MapScreen'
import { ListScreen } from '../screen/list/ListScreen'

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
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        )}
        </>
    )
}