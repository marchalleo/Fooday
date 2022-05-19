import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState, useEffect,} from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';
import MapView, { Marker } from 'react-native-maps';
import {useStore} from '../../store/places'

import axios from "axios";

import { styles } from '../../style/global.style'
import { style } from './Map.style'

export function MapScreen({ navigation }) {

  const {user, setUser} = useContext(UserContext);
  const {places, getPlaces} = useStore();

  useEffect(() =>{
    if( user === undefined) return
    getPlaces(user);
  }, [user])
  //on initialise la function qui retourne la liste, afin d'avoir les markers
  return (
    <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 45.764043,
            longitude: 4.835659,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={style.map}
        >
          {places.map((place) => (

          
            <Marker
              key={place.id}
              coordinate={{ latitude : place.latitude , longitude : place.longitude }}
              pinColor='red'
            />
          ))}
        </MapView>
    </View>
  );
}