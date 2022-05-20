import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, TextInput } from 'react-native';
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
  
  const [search, setSearch] = useState('');

  const [defaultPlace, setDefaultPlace] = useState(places);
  
  const searchPlaces = places
  .filter(place => place.title.includes(search));

  const filteredPlace = () => {
    const noGone = defaultPlace.filter(place => !place.gone).filter(place => place.title.includes(search));
    setPlaces(noGone);
  }

  const filteredPlaceGone = () => {
    const gone = defaultPlace.filter(place => place.gone).filter(place => place.title.includes(search));
    setPlaces(gone);
  }

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
            setDefaultPlace(data.map((data) => {
                return{
                id: data.id,
                title: data.attributes.title,
                comment: data.attributes.comment,
                address: data.attributes.address,
                latitude: data.attributes.latitude,
                longitude: data.attributes.longitude,  
                gone: data.attributes.gone,
                type: data.attributes.type.data?.attributes?.name,
                }
            }))
            setPlaces(defaultPlace);
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
              <Item id={item.id} title={item.title} address={item.address} type={item.type} latitude={item.latitude} longitude={item.longitude}/>
        );
      }


  return (
    <View style={styles.container}>
        <SafeAreaView style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
          <View style={style.viewListHeader}>
            <View style={style.viewListHeaderBloc}>
              <Pressable style={style.viewListHeaderGone} onPress={() => filteredPlaceGone()}>
                <Text style={style.viewListHeaderGoneText}>VISITÉ</Text>
              </Pressable>
              <Pressable style={style.viewListHeaderGone} onPress={() => filteredPlace()}>
                <Text style={style.viewListHeaderGoneText}>NON VISITÉ</Text>
              </Pressable>
            </View>
            <View style={style.viewListHeaderBlocSearch}>
              <TextInput 
              style={style.viewListSearch}
              placeholder="Rechercher"
              placeholderTextColor="#132851"
              value={search}
              onChangeText={setSearch}
              required
              />
            </View>
          </View>
            <FlatList style={style.flatList} data={searchPlaces} renderItem={renderItem} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} keyExtractor={(item) => item.id}/>
            <Pressable style={style.addPlaces} onPress={() => placeFormScreen()}>
              <View style={style.addPlacesIcon}></View>
              <View style={style.addPlacesIcon2}></View>
            </Pressable>
        </SafeAreaView>
    </View>
  );
}