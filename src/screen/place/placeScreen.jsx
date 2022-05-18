import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';

import { styles } from '../../style/global.style'

export function PlaceScreen({ navigation, route }) {

  const item = route.params.item;

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Text>{item.address}</Text>
    </View>
  );
}