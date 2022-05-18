import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screen/auth/login/LoginScreen';
import { RegisterScreen } from '../screen/auth/register/RegisterScreen'
import { UserScreen } from '../screen/user/UserScreen'
import { MapScreen } from '../screen/map/MapScreen'
import { ListScreen } from '../screen/list/ListScreen'
import { PlaceScreen } from '../screen/place/placeScreen'
import { PlaceFormScreen } from '../screen/placeForm/placeForm'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginContext } from '../context/context';
import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function StackNavigator() {

    const {login, setLogin} = useContext(LoginContext);

    const Tab = createBottomTabNavigator();

    const TabNav = () => {
        return (
            <Tab.Navigator initialRouteName="Map">
                <Stack.Screen name="List" component={ListScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Map" component={MapScreen} options={{headerShown: false}}/>
                <Stack.Screen name="User" component={UserScreen} options={{headerShown: false}}/>
            </Tab.Navigator>
        )
    }

    return (
        <>
        {login ? (
            //si le login est true, alors on retourne les screen suivants
            <Stack.Navigator>
                <Stack.Screen name="Home" component={TabNav} options={{headerShown: false}}/>
                <Stack.Screen name="Place" component={PlaceScreen}/>
                <Stack.Screen name="PlaceForm" component={PlaceFormScreen}/>
            </Stack.Navigator>
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