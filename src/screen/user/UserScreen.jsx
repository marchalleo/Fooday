import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';

import { styles } from '../../style/global.style'
import { style } from './User.style'

export function UserScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  return (
    <View style={styles.container}>
        <Text style={style.viewUserText}>{user?.id}</Text>
        <Text style={style.viewUserText}>{user?.username}</Text>
        <Text style={style.viewUserText}>{user?.email}</Text>
    </View>
  );
}