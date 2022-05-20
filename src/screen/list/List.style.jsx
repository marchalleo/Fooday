import { StyleSheet } from 'react-native';
import { variable } from '../../style/variable.style'

export const style = StyleSheet.create({
    viewListHeader: {
        width: '100%',
        height: '15%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 5,
    },
    viewListHeaderBloc: {
        width: '100%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    viewListHeaderGone: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    viewListHeaderGoneText: {
        // fontSize: 18,
        color: variable.white,
    },
    viewListHeaderBlocSearch: {
        width: '100%',
        height: '35%',
    },
    viewListSearch: {
        backgroundColor: "#FFFFFF",
        width: "80%",
        height: '100%',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        paddingLeft: 30,
    },
    flatList: {
        width: '85%',
    },
    viewItem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 105,
        borderBottomWidth: 2,
        borderColor: variable.white,
    },
    viewItemTitle: {
        color: variable.white,
        fontSize: 20,
        marginBottom: 15,
    },
    viewItemInfo: {
        flexDirection: 'row',
    },
    viewItemType: {
        color: variable.green,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginRight: 15,
    },
    viewItemText: {
        color: variable.white,
    },
    addPlaces: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        backgroundColor: variable.green,
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addPlacesIcon: {
        width: '60%',
        height: '8%',
        backgroundColor: variable.blueNavy,
        textAlign: 'center',
        borderRadius: 10,
    },
    addPlacesIcon2: {
        position: 'absolute',
        width: '8%',
        height: '60%',
        backgroundColor: variable.blueNavy,
        textAlign: 'center',
        borderRadius: 10,
    },
});