import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/context';
import MapView, { Marker } from 'react-native-maps';
import {useStore} from '../../store/places';
import axios from 'axios';

import { styles } from '../../style/global.style'
import { style } from './place.style'

export function PlaceScreen({ navigation, route }) {

  const item = route.params.item;

  const {user, setUser} = useContext(UserContext);
  const {places, setPlaces} = useStore();


  const deletePlace = (id) => {
    axios.delete('https://digitalcampus.nerdy-bear.com/api/places/' + id, {
      headers: {
        Authorization: 'Bearer ' + user.jwt
      },
  })
  const place = places.filter((place) => place.id !== id);
  setPlaces(place);
  navigation.navigate('List');
};
  const VisitedPlace = (item) => {
    axios.put('https://digitalcampus.nerdy-bear.com/api/places/' + item.id, {data : {
      title: item.title,
      comment: item.comment,
      address: item.address,
      latitude: item.latitude,
      longitude: item.longitude,  
      gone: !item.gone,
    }}, {
      headers: {
        Authorization: 'Bearer ' + user.jwt
      },
  }).then(response => {
    setPlaces(places.map((place) => {
      if(place.id == item.id) {
        place.gone = response.data.data.attributes.gone
      }
      return place
    }));
  })
  };

  const AlertDelete = (id) => {  
    Alert.alert(  
        'Êtes-vous sûr de vouloir supprimer ce lieu ?',  
        '',  
        [  
            {  
                text: 'Annuler',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'Supprimer', onPress: () => deletePlace(id)},  
        ]  
    );  
  }

  return (
    <View style={styles.container}>
      <View style={style.viewPlaceMap}>
        <MapView
          initialRegion={{
            latitude: item.latitude,
            longitude: item.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          style={style.map}>
          <Marker
            coordinate={{ latitude : item.latitude , longitude : item.longitude }}
            pinColor='red'
          />
        </MapView>
      </View>
      <View style={style.viewPlaceInfo}>
        <View style={style.viewPlaceInfoContent}>
          <Text style={style.viewPlaceText}>{item.title}</Text>
          <Text style={style.viewPlaceAdress}>{item.address}</Text>
          <Text style={style.viewPlaceAdress}>{item.gone}</Text>
          <Pressable style={style.viewPlaceDelete} onPress={() => AlertDelete(item.id)}><Text style={style.viewPlaceDeleteText}>supprimer</Text></Pressable>
          {/* <Pressable style={style.viewPlaceDelete} onPress={() => VisitedPlace(item)}>
            <Text style={style.viewPlaceDeleteText}>
              <>
                {
                  item.gone ? (
                    <Text>Visité </Text>
                  ) : (
                <Text> Non visité</Text>
                  )
                }
              </>
            </Text>
          </Pressable> */}
        </View>
      </View>
    </View>
  );
}