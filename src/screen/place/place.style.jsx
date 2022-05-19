import { StyleSheet } from 'react-native';
import { variable } from '../../style/variable.style'

export const style = StyleSheet.create({
    viewPlaceMap: {
        width: '100%',
        height: '70%'
    },
    map: {
        width: '100%',
        height: '100%',
    },
    viewPlaceInfo: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewPlaceInfoContent: {
        width: '100%',
        height: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewPlaceText: {
        fontSize: 30,
        color: variable.white,
    },
    viewPlaceAdress: {
        fontSize: 18,
        color: variable.white,
    },
    viewPlaceDelete: {
        backgroundColor: 'orange',
        marginBottom: 20,
        borderRadius: 10,
    },
    viewPlaceDeleteText: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 15,
        paddingRight: 15,
        color: variable.white,
        fontSize: 15,
    },
});