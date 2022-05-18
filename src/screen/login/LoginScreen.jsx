import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/context';
import { UserContext } from '../../context/context';
import axios from 'axios';

import { styles } from '../../style/global.style'
import { style } from './Login.style'

export function LoginScreen({ navigation }) {

  const {login, setLogin} = useContext(LoginContext);
  const {user, setUser} = useContext(UserContext);

  const [identifiant, setIdentifiant] = useState('');
  const [password, setPassword] = useState('');

  const LoginUser = () => {
      axios.post('https://digitalcampus.nerdy-bear.com/api/auth/local', {
        identifier: identifiant,
        password: password
      })
      .then(function (response) {
        console.log(response.data);
        setLogin(1);
        const {data} = response;
        setUser({
          id: data.user.id,
          username: data.user.username,
          email: data.user.email,
          jwt: data.jwt,
        });//on set dans le context User ses informations
      })
      .catch(function (error) {
        console.log(error);
        setIdentifiant('');
        setPassword('');
        Alert.alert('Identifiant ou mot de passe incorrect')
      });//si le password est incorrect, on reset les inputs et affiche une alert
  }

  return (
    <View style={styles.container}>
      <View style={style.viewTitle}>
        <Text style={style.viewTitleText}>Connexion</Text>
      </View>

      <View style={style.viewLogin}>
        <TextInput 
          style={style.viewLoginInput}
          placeholder="Identifiant"
          placeholderTextColor="#FFFFFF"
          value={identifiant}
          onChangeText={setIdentifiant}
          required
        />
        <TextInput 
          style={style.viewLoginInput}
          placeholder="Mot de passe"
          placeholderTextColor="#FFFFFF"
          value={password}
          onChangeText={setPassword}
          required
          secureTextEntry={true}
        />
        <Pressable style={style.viewLoginSubmit} onPress={() => LoginUser()}>
          <Text style={style.viewLoginSubmitText}>Se connecter</Text>
        </Pressable>
      </View>

      <View style={style.viewNoAccount}>
        <Text style={style.viewNoAccountText}>Vous n'avez pas encore de compte ?</Text>
        <Pressable onPress={() => navigation.navigate('Register')}><Text  style={style.viewNoAccountLink}>Inscrivez-vous</Text></Pressable>
      </View>
    </View>
  );
  }