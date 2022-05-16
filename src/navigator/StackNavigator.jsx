import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screen/HomeScreen';
import {DetailsScreen} from '../screen/DetailScreen'

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    )
}