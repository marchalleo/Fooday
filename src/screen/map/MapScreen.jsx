import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';

import { styles } from '../../style/global.style'
import { style } from './Map.style'

export function MapScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  return (
    <View style={styles.container}>
        <Text style={style.viewMap}>Map</Text>
    </View>
  );
}