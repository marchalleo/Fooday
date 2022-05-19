import { StyleSheet, Dimensions } from 'react-native';
import { variable } from '../../style/variable.style'

export const style = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },    
});