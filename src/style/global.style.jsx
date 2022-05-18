import { StyleSheet } from 'react-native';
import { variable } from './variable.style'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variable.blueNavy,
    },
    containerWhite: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: variable.white,
    },
});