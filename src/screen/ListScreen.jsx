import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../context/context';
import { UserContext } from '../context/context';
import axios from 'axios';

export function ListScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('https://digitalcampus.nerdy-bear.com/api/places?populate=type', {
            headers: {
            Authorization: 'Bearer ' + user.jwt
            }
        }).then((response) => {
            const {data} = response.data;
            console.log(data);
            setPlaces(data.map((data) => {
                return{
                id: data.id,
                title: data.attributes.title,
                comment: data.attributes.comment,
                address: data.attributes.address,
                latitude: data.attributes.latitude,
                longitude: data.attributes.longitude,   
                type: data.attributes.type.data?.attributes?.name,
                }
            }))
        });
    }, []);

  return (
    <View style={styles.container}>
        {places.map((places) => (
            <View key={places.id}>
                <Text>{places.title}</Text>
                <Text>{places.address}</Text>
                <Text>{places.latitude}</Text>
                <Text>{places.longitude}</Text>
                <Text>{places.type}</Text>
            </View>
        ))}
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      },
  });