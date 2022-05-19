import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { UserContext } from '../../context/context';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {useStore} from '../../store/places'


import { styles } from '../../style/global.style'
import { style } from './placeForm.style'

export function PlaceFormScreen({ navigation }) {

  const {user, setUser} = useContext(UserContext);
  const {places, setPlaces} = useStore();

  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  const SubmitPlace = () => {
    axios({
    url: 'https://digitalcampus.nerdy-bear.com/api/places',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + user.jwt
    },
      data: {
        data : {
          title: title,
          address: address,
          latitude: latitude,
          longitude: longitude,
        }
      }
    })
    .then(function (response) {
      const data = response.data.data
      const newPlace = {
        id: data.id,
        title: data.attributes.title,
        address: data.attributes.address,
        latitude: data.attributes.latitude,
        longitude: data.attributes.longitude,
      }
      setPlaces([...places, newPlace]);
      navigation.replace('Place', {item: newPlace})
    })
    .catch(function (error) {
      console.log(error);
      Alert.alert('Veuillez réessayer')
    });
    setTitle('');
    setAddress('');
    setLongitude('');
    setLatitude('');
  }

  return (
    <View style={styles.container}>
      <View style={style.viewPlaceForm}>
        <TextInput 
          style={style.viewPlaceFormInput}
          placeholder="Titre"
          placeholderTextColor="#FFFFFF"
          value={title}
          onChangeText={setTitle}
          required
        />
        <TextInput 
          style={style.viewPlaceFormInput}
          placeholder="Adresse"
          placeholderTextColor="#FFFFFF"
          value={address}
          onChangeText={setAddress}
          required
        />
        <TextInput 
          style={style.viewPlaceFormInput}
          placeholder="Longitude"
          placeholderTextColor="#FFFFFF"
          value={longitude}
          onChangeText={setLongitude}
          required
        />
        <TextInput 
          style={style.viewPlaceFormInput}
          placeholder="Latitude"
          placeholderTextColor="#FFFFFF"
          value={latitude}
          onChangeText={setLatitude}
          required
        />
        <Pressable style={style.viewPlaceFormSubmit} onPress={() => SubmitPlace()}>
          <Text style={style.viewLoginSubmitText}>Envoyer</Text>
        </Pressable>
      </View>
    </View>
  );
}