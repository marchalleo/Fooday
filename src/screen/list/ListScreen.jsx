import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';
import { PlaceContext } from '../../context/context';
import {useStore} from '../../store/places'
import axios from 'axios';

import { styles } from '../../style/global.style'
import { style } from './List.style'

export function ListScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  const {places, setPlaces} = useStore();


  const placeDetail = (item) => {
    navigation.navigate('Place', {item});
    console.log(item);
  }

  const placeFormScreen = () => {
    navigation.navigate('PlaceForm');
  }

    useEffect(() => {      
        axios.get('https://digitalcampus.nerdy-bear.com/api/places?populate=type', {
            headers: {
            Authorization: 'Bearer ' + user.jwt
            }
        }).then((response) => {
            const {data} = response.data;
            // console.log(data);
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

    const Item = (item) => (
        <View>
          <Pressable style={style.viewItem} onPress={() => placeDetail(item)}>
            <Text style={style.viewItemTitle}Title>{ item.title }</Text>
            <View style={style.viewItemInfo}>
                <Text style={style.viewItemType}>{ item.type }</Text>
                <Text style={style.viewItemText}>{ item.address }</Text>
            </View>
          </Pressable>
        </View>
      );
      
    const renderItem = ({ item }) => {
        return (
              <Item id={item.id} title={item.title} address={item.address} type={item.type}/>
        );
      }


  return (
    <View style={styles.container}>
        <SafeAreaView style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <FlatList style={style.flatList} data={places} renderItem={renderItem} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.id}/>
            <Pressable style={style.addPlaces} onPress={() => placeFormScreen()}>
              <View style={style.addPlacesIcon}></View>
              <View style={style.addPlacesIcon2}></View>
            </Pressable>
        </SafeAreaView>
    </View>
  );
}