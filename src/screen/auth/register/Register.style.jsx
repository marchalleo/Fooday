import { StyleSheet } from 'react-native';
import { variable } from '../../style/variable.style'

export const style = StyleSheet.create({
    viewTitleText: {
      color: 'white',
      fontSize: 40,
    },
    viewRegister: {
      width: '80%',
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewRegisterInput: {
        width: '90%',
        height: '15%',
        textAlign: 'center',
        backgroundColor: variable.blueNavy,
        borderWidth: 1,
        borderColor: variable.white,
        borderRadius: 200,
        color: variable.white,
        marginTop: 10,
        marginBottom: 10,
    },
    viewRegisterSubmit: {
        width: '60%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: variable.green,
        borderRadius: 200,
        marginTop: 25,
    },
    viewNoAccount: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewNoAccountText: {
        color: 'white',
        fontSize: 14,
        marginBottom: 10,
    },
    viewNoAccountLink: {
        color: variable.green,
        fontSize: 18,
        marginBottom: 10,
    },
});